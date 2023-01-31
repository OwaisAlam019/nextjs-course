import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents} from '../../dummy-data'
import { useRouter } from 'next/router' 

function EventsPage(){

    const router = useRouter()
    const allEvents  = getAllEvents()

    function findEventHandler(year,month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList eventList={allEvents}/>
        </Fragment>
    )
}
export default EventsPage