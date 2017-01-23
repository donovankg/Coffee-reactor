import React from 'react';
// 2017-04-13T16:30:00.000Z

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


  return(

    <tr className="calFix">

        <td><input className="col-md-12" defaultValue={title} onChange={calEditTitle}/></td>
        <td><input className="col-md-12" defaultValue={desc} onChange={calEditDesc}/></td>
        <td><button onClick={() => editStart()}>{start}</button></td>
        <td><button> {end}</button></td>

        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
