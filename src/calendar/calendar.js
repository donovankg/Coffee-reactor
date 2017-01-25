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
let startDayCheck = false;
let startMonthCheck = false;
let startYearCheck = false;
let endCheck = false;

let holdDay;
let holdMonth;
let holdYear;
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

function resetChecks(){
  console.log('reseting stuff');
    titleCheck, descCheck, startDayCheck,startMonthCheck, startYearCheck, endCheck = false;
}
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
  console.log('this is index',index.start);
  if(descCheck){
    index.desc = desc;
  }
  if(titleCheck){
    index.title = this.state.title;
  }
  if(startDayCheck == false){
    holdDay = index.start.slice(8,10);
    console.log(holdDay);
  }
  if(startMonthCheck == false){
      holdMonth = index.start.slice(5,7);
  }
  if(startYearCheck == false){
    holdYear = parseInt(index.start.slice(0,4));
  }
  index.start=holdYear+"-"+holdMonth+"-"+holdDay+"T10:00:00.000Z";

  if(endCheck){
    index.end = end;
  }
  var newArr = [...this.state.arr];

  this.setState({arr:newArr},title:'');
  localStorage.setItem('myEventsList', JSON.stringify(this.state.arr));
  resetChecks()
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
  if(e.target.value < 10){
      holdDay = "0"+e.target.value;
  }else{
      holdDay = e.target.value;
  }
  console.log('this is Day', holdDay);
  startDayCheck = true;
}

calMonthStart(e,item){
  console.log('this is month- ', e.target.value);
  holdMonth = e.target.value;
  startMonthCheck = true;
}

calYearStart(e,item){
  console.log('this is year', e.target.value);
  holdYear = e.target.value;
  startYearCheck = true;
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
