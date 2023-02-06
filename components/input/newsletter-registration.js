import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
import swal from 'sweetalert'
 
function NewsletterRegistration() {
  const userEmail = useRef()

  async function registrationHandler(event) {
    event.preventDefault();
    const userEmailValue = userEmail.current.value 
    console.log(userEmailValue);

   const response =  await fetch('/api/newsletter',{
      method:'POST',
      body:JSON.stringify({email:userEmailValue}),
      headers:{
        "Content-type":'Application/json'
      }
    })

    const data = await response.json()
    swal("Here's the title!", "...and here's the text!");
    console.log("server Response", data);
    event.target.reset()

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={userEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
