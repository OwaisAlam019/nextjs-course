import EventList from "../components/events/EventList"
import { getFeaturedEvents } from '../helpers/api-utils'
function HomePage(props){

    return (
        <>
            <EventList  eventList={props.events}/>
        </>
    )


}

export default HomePage

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    return {
        props:{
            events: featuredEvents
        }
    }
}