import React from 'react';
import '../App.css';

const Conversion = ({convert, value, from , to, convertProp}) => {
return (
  <div >
      <input id ="conversionWidget" type="number" className="form-control main-info-search" placeholder="CONVERT" onChange={(e)=> value(e)}/><br />
      <div className = "form-group">
      <label className = "col-sm-2 control-label">From</label>
      <div className = "col-sm-10">
      <select className = "form-control " id ="conversionWidget" onChange={(e)=> from(e)}>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="EUR">EUR</option>
      </select><br />
  </div>
  </div>
  <div className = "form-group">
      <label className = "col-sm-2 control-label">To</label>
      <div className = "col-sm-10">
      <select className = "form-control " id ="conversionWidget" onChange={(e)=> to(e)}>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="EUR">EUR</option>
      </select><br />
  </div>
  </div>
  <div >
    <div className = "row">
      <div className = "col-sm-6"> {convertProp} </div>
      <input type="button" className='btn btn-primary col-sm-4' value='CONVERT' onClick={() => convert() }/>
      </div>
    </div>
  </div>
  );
};
export default Conversion;
