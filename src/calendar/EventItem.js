import React from 'react';
import DatePicker from 'react-datepicker';
import './css/react-datepicker.css';

const EventItem=({item, calEditTitle, calEditDesc, calDelete, calEditStart, calEditEnd, calSave, handleChange, thisState}) => {

  const title=item.title;
  const start=item.start;
  const end=item.end;
  const desc=item.desc;
  const setId=item.id;

  return(
    <tr>
        <td><input defaultValue={title} onChange={calEditTitle}/></td>
        <td><input defaultValue={desc} onChange={calEditDesc}/></td>
        <td><input defaultValue={start} onChange={calEditStart}/></td>
        <td><input defaultValue={end} onChange={calEditEnd}/></td>
        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
