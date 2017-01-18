import React from 'react';

const Table =({transactionArr, editThis, deleteThis})=> {

  const trans = transactionArr.map((item) =>{
    return <tr>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.convert}</td>
              <td>
                  <input key={item.id} type="button" className='btn btn-primary' value='Edit' onClick={() =>editThis(item)}/>
                  <input type="button" className='btn btn-primary' value='Delete' onClick={() =>deleteThis(item.id)}/>
              </td>
            </tr>
  });
     return (
      <table className='table'>
        <thead>
          <tr>
            <th className="text-center">Transaction</th>
            <th className="text-center">Amount</th>
            <th></th>
            <th className="text-center">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {trans}
        </tbody>
      </table>
    )}
export default Table;
