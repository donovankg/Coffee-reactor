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

const EventItem=({item, calEditTitle, calEditDesc, calDelete, calDayStart, calMonthStart, calYearStart, calEditEnd,
  calSave, handleChange, thisState}) => {


console.log(item.start);
  startDay = item.start.slice(8,10);
  startMonth = item.start.slice(5,7);
  startYear = parseInt(item.start.slice(0,4))

  start = startMonth+'/'+startDay+'/'+startYear;

  let endDay = item.end.slice(8,10);
  let endMonth = item.end.slice(5,7);
  let endYear = parseInt(item.end.slice(0,3))+1816;
  let end = endMonth+'/'+endDay+'/'+endYear;

  const title=item.title;
  const desc=item.desc;
  const setId=item.id;

function checkStatus(){
  let outgoingStart = new Date(startYear, startMonth, startDay);
  console.log(outgoingStart);
  // console.log('works');
  calMonthStart(outgoingStart);


}
  return(

    <tr className="calFix">

        <td><input className="" defaultValue={title} onChange={calEditTitle}/></td>
        <td><input className="" defaultValue={desc} onChange={calEditDesc}/></td>
        <td>
        <div className="col-md-12">
          <span className="col-md-2">Start </span>
          <input onChange={calDayStart} className="col-md-2" name="dayPicker" type="number" min="1" max="31" defaultValue={startDay} />
          <select onChange={calMonthStart} className="col-md-4" name="monthPicker">

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
          <input onChange={calYearStart} className="col-md-4" name="yearPicker" type="number"  defaultValue={startYear} />

        </div>
        <br />


        <div className="col-md-12">
        <span className="col-md-2">End </span>
        <input className="col-md-2" name="dayPicker" type="number" min="1" max="31" defaultValue={endDay} />
        <select onChange={calEditEnd} className="col-md-4" name="monthPicker">
          <option value ="00"> Jan</option>
          <option value ="01"> Feb</option>
          <option value ="02"> Mar</option>
          <option value ="03"> Apr</option>
          <option value ="04"> May</option>
          <option value ="05"> Jun</option>
          <option value ="06"> Jul</option>
          <option value ="07"> Aug</option>
          <option value ="08"> Sept</option>
          <option value ="09"> Oct</option>
          <option value ="10"> Nov</option>
          <option value ="11"> Dec</option>
        </select>
        <input className="col-md-4" name="yearPicker" type="number"  defaultValue={endYear} />

      </div>

</td>

        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
