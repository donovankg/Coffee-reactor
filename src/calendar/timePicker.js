import React, {Component} from 'react';

class TimePicker extends Component{


render(){



  return(

    <div>
      <input name="dayPicker" type="number" min="1" max="31" defaultValue="1" />
      <select name="monthPicker">
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
      <input name="yearPicker" type="number" min="2017"  defaultValue="2017" />
      <input name="hourPicker" type="number" min="0" max="24"  defaultValue="10" />
      <select name="minutePicker">
        <option value ="00">00</option>
        <option value ="30">30</option>
      </select>

    </div>
  )
}


}


export default TimePicker;
