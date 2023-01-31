import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents} from '../../dummy-data'

function EventsPage(){

    const allEvents  = getAllEvents()

    return (
        <Fragment>
            <EventSearch />
            <EventList eventList={allEvents}/>
        </Fragment>
    )
}
export default EventsPage