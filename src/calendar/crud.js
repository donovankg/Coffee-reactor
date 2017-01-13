import React, {Component} from 'react';
import myEventsList from '../events/events';
import EventItem from './EventItem';



calLoad();


//temp area
function calDelete(index) {
  myEventsList.slice(0,1);

  console.log('delete', index);
  for(var key in myEventsList){
    if(myEventsList[key].id == index.id){
      myEventsList.splice(key,1);
      localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
      // console.log(myEventsList.length);

    }
  }

  console.log(index.id);
  // myEventsList.slice(0,1)
    // localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
    console.log('after',myEventsList.length);
}

function calEdit(index) {
  console.log(myEventsList.length);
  console.log('edit ' ,index);
  // myEventsList[index].txtTitle = txtTitle;
  // myEventsList[index].startDate = startDate;
  // myEventsList[index].endDate = endDate;
  // myEventsList[index].allDay = allDay;
  // localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
}

function calNew() {
  var newEvent = {
      'title': "",
      'start': new Date(),
      'end': new Date()
  }
  myEventsList[myEventsList.length]= newEvent;
  localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
  var txtTitle = '';
  var startDate = '';
  var endDate = '';
}

function calLoad() {
    var loadData = localStorage.getItem('myEventsList');
    // myEventsList = JSON.parse(loadData);
}

class CalendarCrud extends Component  {
constructor(props){
  super(props);
  this.state = {myEventsList}
}
ComponentSetState(){
  this.setState({
    myEventsList: myEventsList
  })
}
  render(){

  const showEvents = this.state.myEventsList.map((item) =>{
      return(
        <EventItem calEdit={calEdit.bind(this)} calDelete={calDelete.bind(this)} item ={item} />

      )
    })
    return(

        <div>
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
        {showEvents}
        </table>
        </div>

    )
  }

}
export default CalendarCrud;
