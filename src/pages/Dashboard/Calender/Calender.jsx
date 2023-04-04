import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timegridPlugin from '@fullcalendar/timegrid'
import './Calender.css'
import { createEventId, INITIAL_EVENTS } from '../../../data'
import useCalendar from '../../../stores/Calender'

const Calender = () => {


  // here evevts are fetched from zustand(Calender.js)
  const { currentEvents, setCurrentEvents } = useCalendar()


  const handleEvents = async (events)=>{

    await Promise.resolve(setCurrentEvents(events))
  }

  const handleDataSelect = (selectInfo) =>{
    let title = prompt('Please enter a title for the event')
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
     
    if(title){
      // Add Event
      calendarApi.addEvent({
         id:createEventId(),                   
         title,
         start: selectInfo.start,
         end:selectInfo.end,
         allDay: selectInfo.allDay
      })
    }

  }



  const handleEventClick = (clickInfo) =>{
   if(confirm('Are you sure you want to delete this event?')){
    // Remove event
    clickInfo.event.remove()
   }
  }

  return (
   <div className="calender-container">
    <div>
      <FullCalendar
       plugins={[dayGridPlugin,interactionPlugin,timegridPlugin]}
       headerToolbar={{
        left:'prev,next,today',
        center:'title',
        right:'dayGridMonth,timeGridWeek,timeGridDay'
       }}

       allDaySlot={false}
      //  when we refrsh initially by default weekGrid will be there
      initialView="timeGridWeek"
      slotDuration={'01:00:00'}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      nowIndicator={true}
      //here our events are fetched
      // initialEvents={INITIAL_EVENTS}
      initialEvents={currentEvents}

      // if any changes like add/delete then it is runned with updated set of events as arguments(events) i.e all the previous elements and newly added element and it will go to zustand store and update the array
      eventsSet={handleEvents}

      // when calnder is clicked this function in runned
      select={handleDataSelect}

      // to delete event
      eventClick={handleEventClick}
      />
    </div>
   </div>
  )
}

export default Calender