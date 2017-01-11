import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './css/react-big-calendar.css';
var myEventsList = [
    {
      'title': 'All Day Event',
      'allDay': true,
      'start': new Date(2017, 12, 0),
      'end': new Date(2017, 12, 1)
    }

];


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
const MyCalendar = props => (
  <div>
    <BigCalendar className="col-md-4"
    
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);


export default MyCalendar;
