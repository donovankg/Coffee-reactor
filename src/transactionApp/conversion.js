import React from 'react';

const Conversion = ({convert, value, from , to, convertProp}) => {
return (
  <div>
      <input type="number" className="main-info-search" placeholder="CONVERT ..." onChange={(e)=> value(e)}/><br />
      <label>Convert Currency From</label>
      <select onChange={(e)=> from(e)}>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="EUR">EUR</option>
      </select><br />
      <label>Convert Currency To</label>
      <select onChange={(e)=> to(e)}>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="EUR">EUR</option>
      </select><br />
      <input type="button" className='btn btn-primary' value='CONVERT' onClick={() => convert() }/>
      <div> {convertProp} </div>
  </div>
  );
};
export default Conversion;
