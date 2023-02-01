import { useRouter } from "next/router"
import { Fragment } from "react"
import { getStaticProps } from "."
import EventList from "../../components/events/EventList"
import { getFilteredEvents } from '../../helpers/api-utils'

function FilteredEventPage (props){

const events  = props.filteredEvents

if(props.hasError)
    return(
        <Fragment>
            <div>
                Invalid Filter
            </div>
        </Fragment>
    )

    if(!events.length)
    return(
        <Fragment>
            <div>
                Nothing Found
            </div>
        </Fragment>
    )


    return (
        <Fragment>
            <EventList eventList={events}/>
        </Fragment>
    )
}

export default FilteredEventPage

export async function getServerSideProps(context){

    const filteredData = context.params.slug
    const numYear = +filteredData[0]
    const numMonth = +filteredData[1]

    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]
    
    if(isNaN(filteredYear) || isNaN(filteredMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1){
        return(
            {
                props:{
                    hasError:true
                }
            }
        )
    }

   const  filteredEvents = await getFilteredEvents({year:numYear,month:numMonth})

   return {
    props:{
        filteredEvents: filteredEvents
    }
   }



}