import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './css/react-big-calendar.css';
import './css/calFix.css';
import CalendarCrud from './crud';
import myEventsList from '../events/events';
import EventItem from './EventItem';
import calEdit from './calEdit';
import uuid from 'node-uuid';

let title = '';
let desc = '';
let start = new Date();
let end = new Date();
let titleCheck = false;
let descCheck = false;
let startCheck = false;
let endCheck = false;

let holdDay;
let holdMonth;
let holdYear;
let holdDate;
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class MyCalendar extends Component{
  constructor(props){
    super(props);
    this.state={arr:myEventsList,title: ''}
  }

calDelete(index) {

  var newArr = [...this.state.arr];
  this.setState({arr:newArr},title:'');
  for(var key in newArr){
    if(newArr[key].id == index.id){
      newArr.splice(key,1);
    }
  }
  localStorage.setItem('myEventsList', JSON.stringify(newArr));

}

calNew() {
  var newArr = [...this.state.arr];

  this.setState({arr:newArr},title:'');
  var newEventId;

  var newEvent = {
      'title': "New Event",
      'desc': 'new desc',
      'start': "2017-02-04T16:00:00.000Z",
      'end': "2017-02-14T18:00:00.000Z",
      'id': uuid()
  }

  newArr[newArr.length]= newEvent;
  localStorage.setItem('myEventsList', JSON.stringify(newArr));
}




calSave(index, newTitle){
  console.log(index);
  if(descCheck){
    index.desc = desc;
  }
  if(titleCheck){
    index.title = this.state.title;
  }
  // if(startCheck){
    //collect the date object from eventItem and pass it into index.start

    index.start=holdYear+"-"+holdMonth+"-"+holdDay+"T10:00:00.000Z";
            // 2017-01-14T06:00:00.000Z

    //go into eventItem change it from a lot of vars to one object with lots of props
    // index.start = new Date(holdYear,holdMonth,holdDay,0,0,0);
    console.log('---->',index.start);
  // }
  if(endCheck){
    index.end = end;
  }
  var newArr = [...this.state.arr];

  this.setState({arr:newArr},title:'');
  localStorage.setItem('myEventsList', JSON.stringify(this.state.arr));
  titleCheck, descCheck, startCheck, endCheck = false;
}


calEditTitle(e,item){
  console.log('testing calEditTitle',e.target.value);
  this.setState({title:e.target.value});
  titleCheck = true;
  // console.log('here ',e.target);
}
calEditDesc(e, item){
  descCheck = true;
  desc = e.target.value;
  console.log(desc);
}


calDayStart(e, item){
  startCheck = true;
  if(e.target.value < 10){
      holdDay = "0"+e.target.value;
  }else{
      holdDay = e.target.value;
  }
  console.log('this is Day', holdDay);

}

calMonthStart(e,item){
  startCheck = true;
  console.log('this is month- ', e.target.value);
  holdMonth = e.target.value;
  // console.log('this is start',start);
}

calYearStart(e,item){
  startCheck = true;
  console.log('this is year', e.target.value);
  holdYear = e.target.value;
}

calEditEnd(e,item){
  endCheck = true;
  end = e.target.value;
}

  render(){

  const showEvents = this.state.arr.map((item) =>{
      return(

        <EventItem
          thisState={this.state.arr}
          key={item.id}
          calSave={this.calSave.bind(this)}
          calEditTitle={this.calEditTitle.bind(this)}
          calEditDesc={this.calEditDesc.bind(this)}
          calMonthStart={this.calMonthStart.bind(this)}
          calYearStart={this.calYearStart.bind(this)}
          calDayStart={this.calDayStart.bind(this)}
          calEditEnd={this.calEditEnd.bind(this)}
          calDelete={this.calDelete.bind(this)} item = {item}/>

      )
    })
    return(
      <div>
        <ul className="nav nav-pills">
          <li className=""><a data-toggle="tab" href="#calendarMain">Home</a></li>
          <li><a data-toggle="tab" href="#table">Menu 1</a></li>
        </ul>
        <div className="tab-content">
          <div id="table" className="tab-pane fade">
            <button onClick={() => this.calNew()}>add</button>
            <table className="col-md-12">
              <thead>
                <tr>
                  <th className="">title</th>
                  <th className="">descrption</th>
                  <th className="">Time Line</th>
                  <th>Save</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
              {showEvents}
              </tbody>
            </table>
          </div>
          <div id ="calendarMain" className="tab-pane fade in active">
            <BigCalendar className="col-md-12 findThis"
              events={this.state.arr}
              style={{height: 400}}/>
          </div>
        </div>

        </div>
    )
  }
}


export default MyCalendar;
