import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import { Fragment } from 'react'
import EventSummary  from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'


function EventDetailsPage(){
    const router = useRouter()
    const eventId = router.query.eventId

    const eventDetails =  getEventById(eventId)
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