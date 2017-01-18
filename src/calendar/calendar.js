import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './css/react-big-calendar.css';
import CalendarCrud from './crud';
import myEventsList from '../events/events';
import EventItem from './EventItem';
import calEdit from './calEdit';

let title = '';
let desc = '';
let start = new Date();
let end = new Date();
let titleCheck = false;
let descCheck = false;
let startCheck = false;
let endCheck = false;

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


//move the function links to this file and break up each of the Components
class MyCalendar extends Component{
  constructor(props){
    super(props);
    this.state={arr:myEventsList,title: ''}
  }
  // this.calSave = this.calSave.bind(this);
  // this.handleChange = this.handleChange.bind(this);
  // this.calEditTitle = this.calEditTitle.bind(this);
  // this.calEditDesc = this.calEditDesc.bind(this);
  // this.calEditStart = this.calEditStart.bind(this);
  // this.calEditEnd = this.calEditEnd.bind(this);

calDelete(index) {

  var newArr = [...this.state.arr];
  this.setState({arr:newArr},title:'');
  console.log(newArr);
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
  var newEvent = {
      'title': "New Event",
      'desc': 'new desc',
      'start': new Date(),
      'end': new Date(),
      'id': newArr[newArr.length-1].id+1
  }
  newArr[newArr.length]= newEvent;
  localStorage.setItem('myEventsList', JSON.stringify(newArr));
}

calSave(index, newTitle){
  if(descCheck){
    index.desc = desc;
  }
  if(titleCheck){
    index.title = this.state.title;
  }
  if(startCheck){
    index.start = start;
  }
  if(endCheck){
    index.end = end;
  }
  var newArr = [...this.state.arr];

  this.setState({arr:newArr},title:'');
  localStorage.setItem('myEventsList', JSON.stringify(this.state.arr));
  titleCheck, descCheck, startCheck, endCheck = false;
}


calEditTitle(e,item){
  console.log(e.target.value);
  this.setState({title:e.target.value});
  titleCheck = true;
  console.log('here ',e.target);
}
calEditDesc(e, item){
  descCheck = true;
  desc = e.target.value;
}
calEditStart(e,item){
  startCheck = true;
  start = e.target.value;
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
          calEditStart={this.calEditStart.bind(this)}
          calEditEnd={this.calEditEnd.bind(this)}
          calDelete={this.calDelete.bind(this)} item = {item}
        />
      )
    })
    return(
        <div>
          <button onClick={() => this.calNew()}>add</button>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>descrption</th>
                <th>start</th>
                <th>end</th>
                <th>Save</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
            {showEvents}
            </tbody>
          </table>
          <BigCalendar className="col-md-12"
            events={this.state.arr}
            style={{height: 400}}
            defaultDate={new Date(2015, 3, 1)}
          />

        </div>
    )
  }
}


export default MyCalendar;
