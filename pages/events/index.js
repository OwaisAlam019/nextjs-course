import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents} from '../../helpers/api-utils'
import { useRouter } from 'next/router' 

function EventsPage(props){

    const router = useRouter()
    const allEvents  = props.events

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

export async function getStaticProps(){
    const events = await getAllEvents()

    return {
        props:{
            events: events
        },
        revalidate:60
    }
}