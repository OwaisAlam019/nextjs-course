import { useRef } from 'react';
import btnClasses from '../events/button.module.css'
import classes from '../events/EventSearch.module.css'
function EventSearch(props){
    const yearInputRef = useRef()
    const monthInputRef = useRef()
function submitHandler(event){
    event.preventDefault()
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value
    console.log(event);

    props.onSearch(selectedYear,selectedMonth)


}

    return (
         <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value='2022'>2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">Febuarary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Sept</option>
                        <option value="10">November</option>

                    </select>
                </div>
                <button className={btnClasses.btn}>Find</button>
            </div>
         </form>
    )
    
}

export default EventSearch