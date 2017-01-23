import React from 'react';
import TimePicker from './timePicker';

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
        <td>
        <TimePicker />
        </td>
        <td><button>{end}</button></td>
        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
