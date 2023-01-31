import { useRouter } from "next/router"
import { Fragment } from "react"
import EventList from "../../components/events/EventList"
import { getFilteredEvents } from '../../dummy-data'
function FilteredEventPage (){
    const router = useRouter()
    const filteredData = router.query.slug
    const events  = getFilteredEvents({year:+filteredData[0],month:+filteredData[1]})

    debugger;
    if(!filteredData){
        return (
            <p>
                Loading...
            </p>
        )
    }


    return (
        <Fragment>
            <EventList eventList={events}/>
        </Fragment>
    )
}

export default FilteredEventPage