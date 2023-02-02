import { useRef } from "react";

function HomePage() {
const emailInputRef = useRef()
const feedbackInputRef = useRef()

async function submitHandler(event){
  event.preventDefault()
  const email = emailInputRef.current.value
  const feedbackText = feedbackInputRef.current.value
  const body ={
    email:email,
    text:feedbackText
  }
 const  response = await fetch('http://localhost:3000/api/feedback',
  {
    method:"POST",
    body:JSON.stringify(body),
    headers:{
      "Content-type":"Application/json"
    }

  })
console.log(response,"submitted");

}

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Name</label>
        <input type="email" id="email" ref={emailInputRef} />
        <label htmlFor="feedback">Name</label>
        <textarea type="email" id="feedback" ref={feedbackInputRef} rows={5}>
        </textarea>
        <button>
          Send feedback
        </button>
      </form>
    </div>
  );
}

export default HomePage;
