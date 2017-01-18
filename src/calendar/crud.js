import React, {Component} from 'react';
import myEventsList from '../events/events';
import EventItem from './EventItem';



// calLoad();
let title = '';
let desc = '';
let start = new Date();
let end = new Date();
let titleCheck = false;
let descCheck = false;
let startCheck = false;
let endCheck = false;

console.log('---->',myEventsList);

class CalendarCrud extends Component  {
  constructor(props){
    super(props);
    this.state = {arr:myEventsList};
    this.calSave = this.calSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calEditTitle = this.calEditTitle.bind(this);
    this.calEditDesc = this.calEditDesc.bind(this);
    this.calEditStart = this.calEditStart.bind(this);
    this.calEditEnd = this.calEditEnd.bind(this);
  }

  calDelete(index) {
    // this.state.arr.splice(0,1);
    console.log(this.state.arr);
    for(var key in this.state.arr){
      if(this.state.arr[key].id == index.id){
        // this.state.arr.splice(key,1);
        console.log(key);
        // localStorage.setItem('myEventsList', JSON.stringify(this.state.arr));
        // console.log('---local storage---',localStorage.myEventsList);
      }
    }
  }


  calLoad() {
      var loadData = localStorage.getItem('myEventsList');
      // myEventsList = JSON.parse(loadData);
  }
   calSave(index, newTitle){
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

  calNew() {
    var newEvent = {
        'title': "New Event",
        'desc': 'new desc',
        'start': new Date(),
        'end': new Date(),
        'id': myEventsList[myEventsList.length-1].id+1
    }
    myEventsList[myEventsList.length]= newEvent;
    localStorage.setItem('myEventsList', JSON.stringify(myEventsList));

  }

  componentDidUpdate(e){
    console.log(e);
    // this.setState(title: e.target.value);
  }

  handleChange(event){
    // this.setState({title:event.target.value});
    console.log(event);
  }

  calEditTitle(e,item){
    console.log(item);
    titleCheck = true;
    title = e.target.value;
    // this.componentDidUpdate(e);
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
          newProp={this.state.title}
          key={item.id}
          handleChange ={this.handleChange.bind(this)}
          calSave={this.calSave.bind(this)}
          calEditTitle={this.calEditTitle.bind(this)}
          calEditDesc={this.calEditDesc.bind(this)}
          calEditStart={this.calEditStart.bind(this)}
          calEditEnd={this.calEditEnd.bind(this)}
          calDelete={this.calDelete.bind(this)} item ={item}
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
        </div>

    )
  }

}
export default CalendarCrud;
