import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './css/react-big-calendar.css';
import CalendarCrud from './crud';
import myEventsList from '../events/events';


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
const MyCalendar = props => (
  <div>

    <CalendarCrud />
    <BigCalendar className="col-md-12"
      events={myEventsList}
      style={{height: 400}}
      defaultDate={new Date(2015, 3, 1)}
    />
  </div>
);


export default MyCalendar;
