import React from 'react';

const EventItem=({item, calEditTitle, calEditDesc, calDelete, calEditStart, calEditEnd, calSave, handleChange, thisState, startPicker}) => {

  const title=item.title;
  const start=item.start;
  const end=item.end;
  const desc=item.desc;
  const setId=item.id;



  return(

    <tr>

        <td><input defaultValue={title} onChange={calEditTitle}/></td>
        <td><input defaultValue={desc} onChange={calEditDesc}/></td>
        <td><button>{start}</button></td>
        <td><button>{end}</button></td>
        <td><button onClick={() => calSave(item)}> Save </button> </td>
        <td><button onClick={() => calDelete(item)}> Delete </button></td>
    </tr>
  )
}
export default EventItem;
