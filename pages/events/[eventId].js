import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventSummary  from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getEventById, getAllEvents} from '../../helpers/api-utils'


function EventDetailsPage(props){

    const eventDetails = props.events 
    if(!eventDetails){
        return (
            <p>
                No Events Found
            </p>
        )
    }
    const {title, date , location,image,description} =  eventDetails

    return (
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics date={date} address={location} image={image} imageAlt={title}/>
            <EventContent>
                <p>
                    {description}
                </p>
            </EventContent>
        </Fragment>

    )
}

export default EventDetailsPage

export async function getStaticProps(context){

const eventId = context.params.eventId
const event = await getEventById(eventId)
 return {
    props: {
        events:event
    }
 }
}

export async function getStaticPaths(){
    const allEvents = await getAllEvents()
    const paths = allEvents.map( (event) => ({params:{eventId:event.id}}) )
    return {
        paths:paths,
        fallback:false
    }
}