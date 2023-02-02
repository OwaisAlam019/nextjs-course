import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { getStaticProps } from "."
import EventList from "../../components/events/EventList"
import { getFilteredEvents } from '../../helpers/api-utils'
import useSWR from 'swr'


function FilteredEventPage (props){
    const router = useRouter()
    const filteredData = router.query.slug;

    console.log(router.query);
    const numYear = +filteredData[0]
    const numMonth = +filteredData[1]

    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]

   const [loadedEvents,setLoadedEvents] = useState();

   const { data, error } = useSWR(
    'https://test-project-5e497-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
    (url) => fetch(url).then(res => res.json())
  );

useEffect(() => {
  if (data) {
    const events = [];
    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }
    setLoadedEvents(events)
  }
}, [data]);


if(!loadedEvents)
return (
  <Fragment>
    <div>Loading...</div>
  </Fragment>
);

    if(isNaN(filteredYear) || isNaN(filteredMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1 || error){
    return(
        <Fragment>
            <div>
                Invalid Filter
            </div>
        </Fragment>
    )}

    if(!loadedEvents.length)
    return(
        <Fragment>
            <div>
                Nothing Found
            </div>
        </Fragment>
    )


    return (
        <Fragment>
            <EventList eventList={loadedEvents}/>
        </Fragment>
    )
}

export default FilteredEventPage

// export async function getServerSideProps(context){

//     const filteredData = context.params.slug
//     const numYear = +filteredData[0]
//     const numMonth = +filteredData[1]

//     const filteredYear = filteredData[0]
//     const filteredMonth = filteredData[1]
    
//     if(isNaN(filteredYear) || isNaN(filteredMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1){
//         return(
//             {
//                 props:{
//                     hasError:true
//                 }
//             }
//         )
//     }

//    const  filteredEvents = await getFilteredEvents({year:numYear,month:numMonth})

//    return {
//     props:{
//         filteredEvents: filteredEvents
//     }
//    }



// }