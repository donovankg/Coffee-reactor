import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);


var myEventsList = [];

  class Calendar extends Component {


    render() {
        return (
          <div>
    <BigCalendar
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
        );
    }
}


export default Calendar;
