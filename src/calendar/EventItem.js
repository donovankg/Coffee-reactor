import React from 'react';
import DatePicker from 'react-datepicker';

const EventItem=({item, calEdit, calDelete}) => {

  const title=item.title;
  const start=item.start;
  const end=item.end;
  const desc=item.desc;
  return(
    <tr>
        <td><input value={title} /></td>
        <td><input value={desc} /></td>
        <td><input value={start}/></td>
        <td><input value={end} /></td>
        <td><button onClick={() => calEdit(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
