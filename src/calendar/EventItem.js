import React from 'react';
import Modal from 'react-modal';

function editStart(){
  startMonth = "01";
  startDay = "15";
  testClick();
}

let startMinute;
let startHour;
let startDay;
let startMonth;
let startYear;
let start;
let testClick;

const EventItem=({item, calEditTitle, calEditDesc, calDelete, calEditStart, calEditEnd, calSave, handleChange, thisState}) => {

  testClick = function(){
    let outgoing = startYear+"-"+startMonth+"-"+startDay+"T"+startHour+":"+startMinute+":00.000Z";
    console.log(outgoing);
    item.start = outgoing;

  }

  startMinute = item.start.slice(14,16);
  startHour = item.start.slice(11,13);
  startDay = item.start.slice(8,10);
  startMonth = item.start.slice(5,7);
  startYear = parseInt(item.start.slice(0,3))+1816;
  start = startHour+":"+startMinute+' '+startMonth+'/'+startDay+'/'+startYear;

  let endMinute = item.start.slice(14,16);
  let endHour = item.start.slice(11,13);
  let endDay = item.start.slice(8,10);
  let endMonth = item.start.slice(5,7);
  let endYear = parseInt(item.start.slice(0,3))+1816;
  let end = endHour+":"+endMinute+' '+endMonth+'/'+endDay+'/'+endYear;
  const title=item.title;
  const desc=item.desc;
  const setId=item.id;

function checkStatus(){
  console.log('works');
}
  return(

    <tr className="calFix">

        <td><input className="" defaultValue={title} onChange={calEditTitle}/></td>
        <td><input className="" defaultValue={desc} onChange={calEditDesc}/></td>
        <td>
        <div className="col-md-12">
          <span className="col-md-2">Start </span>
          <input className="col-md-2" name="dayPicker" type="number" min="1" max="31" defaultValue={startDay} />
          <select onChange={() =>checkStatus()} className="col-md-2" name="monthPicker">
            <option value ="01"> Jan</option>
            <option value ="02"> Feb</option>
            <option value ="03"> Mar</option>
            <option value ="04"> Apr</option>
            <option value ="05"> May</option>
            <option value ="06"> Jun</option>
            <option value ="07"> Jul</option>
            <option value ="08"> Aug</option>
            <option value ="09"> Sept</option>
            <option value ="10"> Oct</option>
            <option value ="11"> Nov</option>
            <option value ="12"> Dec</option>
          </select>
          <input className="col-md-2" name="yearPicker" type="number" min="2017"  defaultValue={startYear} />
          <input className="col-md-2" name="hourPicker" type="number" min="0" max="24"  defaultValue={startHour} />
          <select className="col-md-2" name="minutePicker">
            <option value ="00">00</option>
            <option value ="30">30</option>
          </select>
        </div>
        <br />
        <div className="col-md-12">
        <span className="col-md-2">End </span>
          <input className="col-md-2" name="dayPicker" type="number" min="1" max="31" defaultValue="1" />
          <select className="col-md-2" name="monthPicker">
            <option value ="1"> Jan</option>
            <option value ="2"> Feb</option>
            <option value ="3"> Mar</option>
            <option value ="4"> Apr</option>
            <option value ="5"> May</option>
            <option value ="6"> Jun</option>
            <option value ="7"> Jul</option>
            <option value ="8"> Aug</option>
            <option value ="9"> Sept</option>
            <option value ="10"> Oct</option>
            <option value ="11"> Nov</option>
            <option value ="12"> Dec</option>
          </select>
          <input className="col-md-2" name="yearPicker" type="number" min="2017"  defaultValue="2017" />
          <input className="col-md-2" name="hourPicker" type="number" min="0" max="24"  defaultValue="10" />
          <select className="col-md-2" name="minutePicker">
            <option value ="00">00</option>
            <option value ="30">30</option>
          </select>
        </div>
</td>

        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
