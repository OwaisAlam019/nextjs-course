import EventList from "../components/events/EventList"
function HomePage(){
    return (
        <>
            <EventList eventList={featuredEvents}/>
        </>
    )
}

export default HomePage