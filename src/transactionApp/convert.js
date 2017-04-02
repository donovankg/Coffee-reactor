import React from 'react';
import '../App.css';

const Convert =({convertThis, openModal}) =>{
   return(
     <div>
         <input type="button" className='btn btn-primary' value='USD' onClick={() =>convertThis('USD')}/>
         <input type="button" className='btn btn-primary' value='MXN' onClick={() =>convertThis('MXN')}/>
         <input type="button" className='btn btn-primary' value='EUR' onClick={() =>convertThis('EUR')}/>
         <input type="button" className='btn btn-primary' value='ADD' onClick={() =>openModal()}/>
     </div>
   )
}
export default Convert;
