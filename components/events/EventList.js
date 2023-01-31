import EventItem from "./EventItems"
import classes from "./EventList.module.css"
function EventList({eventList}){
    return (
        
        <ul className={classes.list}>

            {
            eventList.map((x)=>{
                return <EventItem eventItem ={x}/>
         })}
        </ul>
    )
}

export default EventList