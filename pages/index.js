import EventList from "../components/events/EventList"
import {getFeaturedEvents} from '../dummy-data'
function HomePage(){
    const featuredEvents = getFeaturedEvents()

    return (
        <>
            <EventList eventList={featuredEvents}/>
        </>
    )
}

export default HomePage