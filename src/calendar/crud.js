import React, {Component} from 'react';
import myEventsList from '../events/events';
import EventItem from './EventItem';



calLoad();
let title = '';
let desc = '';
let start = new Date();
let end = new Date();
let titleCheck = false;
let descCheck = false;
let startCheck = false;
let endCheck = false;
function calDelete(index) {
  myEventsList.slice(0,1);
  console.log('delete', index);
  for(var key in myEventsList){
    if(myEventsList[key].id == index.id){
      myEventsList.splice(key,1);
      localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
    }
  }
}
// function calEdit(index) {
//   console.log(index);
//   for(var key in myEventsList){
//     if(myEventsList[key].id === index.id){
//       console.log(myEventsList[key].title);
//       // myEventsList[key].title = 'Edited'; //from input box
//       localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
//     }
//   }
// }



function calNew() {
  var newEvent = {
      'title': "New Event",
      'start': new Date(),
      'end': new Date(),
      'id': myEventsList[myEventsList.length-1].id+1
  }
  myEventsList[myEventsList.length]= newEvent;
  localStorage.setItem('myEventsList', JSON.stringify(myEventsList));

}

function calLoad() {
    var loadData = localStorage.getItem('myEventsList');
    // myEventsList = JSON.parse(loadData);
}
function calSave(index, newTitle){
  if(descCheck){
    index.desc = desc;
  }
  if(titleCheck){
    index.title = title;
  }
  if(startCheck){
    index.start = start;
  }
  if(endCheck){
    index.end = end;
  }

  localStorage.setItem('myEventsList', JSON.stringify(myEventsList));
  titleCheck, descCheck, startCheck, endCheck = false;
}

class CalendarCrud extends Component  {
  constructor(props){
    super(props);
    this.state = {myEventsList};
    this.calEditTitle = this.calEditTitle.bind(this);
    this.calEditDesc = this.calEditDesc.bind(this);
    this.calEditStart = this.calEditStart.bind(this);
    this.calEditEnd = this.calEditEnd.bind(this);
  }

  calEditTitle(e,item){
    titleCheck = true;
    title = e.target.value;
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

  const showEvents = this.state.myEventsList.map((item) =>{
      return(
        <EventItem key={item.id} calSave={calSave.bind(this)}
        calEditTitle={this.calEditTitle.bind(this)}
        calEditDesc={this.calEditDesc.bind(this)}
        calEditStart={this.calEditStart.bind(this)}
        calEditEnd={this.calEditEnd.bind(this)}
        calDelete={calDelete.bind(this)} item ={item} />

      )
    })
    return(
        <div>
          <button onClick={() => calNew()}>add</button>
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
        </div>

    )
  }

}
export default CalendarCrud;
