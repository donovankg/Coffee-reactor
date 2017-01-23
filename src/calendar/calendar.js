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
    <ul className="nav nav-pills">
      <li className="active"><a data-toggle="tab" href="#calendarMain">Home</a></li>
      <li><a data-toggle="tab" href="#table">Menu 1</a></li>
    </ul>
    <div className="tab-content">

    <div id="calendarMain" className="tab-pane fade in active">
      <BigCalendar className="col-md-12"
        events={myEventsList}
        style={{height: 400}}
        defaultDate={new Date(2015, 3, 1)}
      />
    </div>

    <div id="table" className="tab-pane fade">
      <CalendarCrud />
    </div>

    </div>
  </div>
);


export default MyCalendar;
