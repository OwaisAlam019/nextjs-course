export async function getAllEvents() {
    const response = await fetch('https://test-project-5e497-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
    const data =  await response.json()
    let events = []
    for (const key in data) {

        events.push({
            id:key,
            ...data[key]
        })
        
    }
    return events
  }

  export async function getFeaturedEvents(){
    const allEvents = await getAllEvents()
    return allEvents.filter((_) => _.isFeatured )
} 

export async function getEventById(id) {

    const allEvents = await getAllEvents()


    return allEvents.find((event) => event.id === id);
  }


  export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents()
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }