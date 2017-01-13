import React, { Component } from 'react';
import Convert from './convert';
import Modal from 'react-modal';
import DialogTransaction from './transaction';
import Conversion from './conversion';
import Table from './table';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
class Transaction extends Component{
  constructor(props){
    super(props);
    this.state= {from: 'USD',to: 'USD', value : 0,
                 converted : null, mxn: null, eur: null, cons: null,
                 transactionArr:[],
                 transaction: '',amount: '',
                 id: 0, object: '',
                 modelIsOpen: false,
                };
  };

  openModal(arr){
    this.setState({
        modalIsOpen: true
      })
    if(arr!==undefined){
      var obj = {
        id: arr.id,
        title: arr.title,
        amount: arr.amount
      }
      this.setState({object: obj, modalEdit: true});
    }
  };
  closeModal(){this.setState({modalIsOpen: false})};
  closeEditModal(){this.setState({modelEdit: false})};
  value(e){this.setState({value: e.target.value})};
  from(e){this.setState({from: e.target.value})};
  to(e){this.setState({to: e.target.value})};
  transaction(e){
    if(e.type==='change'){
      this.setState({transaction : e.target.value})
    }
    else{
      this.setState({transaction : e})
    }
  };
  amount(e){
    if(e.type==='change'){
      this.setState({amount : e.target.value})
    }
    else{
      this.setState({amount : e})
    }
  };
  convert(){
    var changes={from: this.state.from, to: this.state.to,value: this.state.value};
    this.TransactionList(changes);

  };
  save(id){
    var newArr = this.state.transactionArr;
    if(id===undefined){
      this.setState({id: this.state.id+1})
      var obj1 = {
        id: this.state.id,
        title: this.state.transaction,
        amount: this.state.amount
      }
      newArr.push(obj1);
      this.setState({
        transactionArr : newArr,
        modalIsOpen: false
      });
    }
    else{
      for(var i=0; i< newArr.length; i++){
          if(id===newArr[i].id){
            var obj2 = {
              id: id,
              title: this.state.transaction,
              amount: this.state.amount
            }
            newArr[i]=obj2;
          }
       }
      this.setState({
        transactionArr : newArr,
        object: '',
        modalIsOpen: false
      });
    }
  };
  editThis(item){
    this.openModal(item);
    this.transaction(item.title);
    this.amount(item.amount);
  }
  deleteThis(id){
    var newArr =this.state.transactionArr;
    for(var i=0; i<newArr.length; i++){
      if(id===newArr[i].id){
        newArr.splice(i, 1);
      }
      this.setState({transactionArr: newArr})
    }
  }
  componentDidMount(){
    var objee = {
      from: 'USD',
      to: 'USD',
      value: null
    }
    this.TransactionList(objee)
  }
  convertThis(event){
    var newArr =this.state.transactionArr;
    if(event==='USD'){
      for(var k in newArr)
      {
        newArr[k].convert = newArr[k].amount + ' USD'
      }
    }
    if(event==='MXN'){
        var chan= {from: 'USD', to: 'MXN', value: 1}
        this.TransactionList(chan);
      var conver =this.state.converted;
      for(var a in newArr){
        newArr[a].convert = (Math.round(newArr[a].amount * conver).toFixed(2)) + ' MXN';
      }
    }
    if(event==='EUR'){
      var cha= {from: 'USD', to: 'EUR', value: 1}
      this.TransactionList(cha);
      var conr =this.state.converted;
      for(var c in newArr){
        console.log((newArr[c].amount) * conr);
        newArr[c].convert = (Math.round(newArr[c].amount * conr).toFixed(2)) + ' EUR';
      }
    }
    this.setState({transactionArr: newArr})

  };
  TransactionList(changes){
    var from = changes.from;
    var to = changes.to;
    var value = changes.value;
    return fetch('http://api.fixer.io/latest?base='+from+'&symbols='+from+','+to)
      .then((response)=> response.json())
      .then((responseJson)=>{
        this.setState({converted: ((responseJson.rates[to]*value)||value)});
      })
  }
  render(){
    return (
      <div>
        <div className='col-md-9'>
           <Convert convertThis={this.convertThis.bind(this)} openModal={this.openModal.bind(this)}/>
           <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Transaction">
              <DialogTransaction save={this.save.bind(this)} closeModal={this.closeModal.bind(this)} transaction={this.transaction.bind(this)}
              amount={this.amount.bind(this)} TransactionProp={this.state.object.title} amountProp={this.state.object.amount} idProp={this.state.object.id}/>
           </Modal>
           <Table transactionArr={this.state.transactionArr} editThis={this.editThis.bind(this)} deleteThis={this.deleteThis.bind(this)}/>
        </div>
        <div className='col-md-3'>
           <Conversion value={this.value.bind(this)} from={this.from.bind(this)} to={this.to.bind(this)} convert={this.convert.bind(this)} convertProp={this.state.converted} />
        </div>
      </div>
    )
  }
}
export default Transaction;
