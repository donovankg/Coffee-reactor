import React from 'react';
const DialogTransaction =({save, closeModal, transaction, amount, TransactionProp, amountProp ,idProp})=>{
  return(
        <form>
            <label>Transaction:</label><br />
            <input type="text" className="main-info-search" defaultValue={TransactionProp} onChange={(e) => transaction(e)}/><br />
            <label>Amount:</label><br />
            <input type="number" className="main-info-search" defaultValue={amountProp} onChange={(e) => amount(e)}/><br /><br/>
            <input type="button" className='btn btn-primary' value='Save' onClick={() => save(idProp)}/>
            <input type="button" className='btn btn-primary' value='Close' onClick={() => closeModal()}/>
        </form>
  )
}
export default DialogTransaction;
