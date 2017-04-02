import React, { Component } from 'react';
import Convert from './convert';
import Modal from 'react-modal';
import DialogTransaction from './transaction';
import Conversion from './conversion';
import Table from './table';

const customStyles ={
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
    this.state={from: 'USD',to: 'USD', value : 0,
                 converted : null, mxn: null, eur: null,
                 transactionArr:[],
                 transaction: '',amount: '',
                 id: 0, object: '',
                 modelIsOpen: false,
                 status: false
                };
  };
  openModal(arr){
    this.setState({
        modalIsOpen: true
      })
    if(arr!==undefined){
      var obj ={
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
    var newArr =this.state.transactionArr;
    if(id===undefined){
      if(newArr.length===0){
         this.setState({id: this.state.id+1});
         var obj1 ={
           id: this.state.id,
           title: this.state.transaction,
           amount: this.state.amount
         }
      }
      if(newArr.length>0){
         obj1 ={
          id: newArr.length,
          title: this.state.transaction,
          amount: this.state.amount
        }
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
            var obj2 ={
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
    localStorage.setItem('myLocal', JSON.stringify(this.state.transactionArr));
  };
  editThis(item){
    this.openModal(item);
    this.transaction(item.title);
    this.amount(item.amount);
    localStorage.setItem('myLocal', JSON.stringify(this.state.transactionArr));
  }
  deleteThis(id){
    var newArr =this.state.transactionArr;
    for(var i=0; i<newArr.length; i++){
      if(id===newArr[i].id){
        newArr.splice(i, 1);
      }
      this.setState({transactionArr: newArr})
    }
    localStorage.setItem('myLocal', JSON.stringify(this.state.transactionArr));
}
  componentDidMount(){
    var objee ={
      from: 'USD',
      to: 'USD',
      value: null
    }
    this.usdToMxn();
    this.usdToEur();
    var myLocal=localStorage.getItem('myLocal');
      if(myLocal!==null){
        var newArr =this.state.transactionArr;
        newArr =JSON.parse(myLocal);
        this.setState({
          transactionArr: newArr
        });
      }
      this.TransactionList(objee);

   }

  convertThis(event){
    var newArr =this.state.transactionArr;
    if(event==='USD'){
      for( var k in newArr)
      {
        newArr[k].convert =newArr[k].amount + ' USD'
      }
    }
    if(event==='MXN'){
      var conver =this.state.mxn;
      for(var a in newArr){
        newArr[a].convert =(Math.round(newArr[a].amount * conver).toFixed(2)) + ' MXN';
      }
    }
    if(event==='EUR'){
      var conr =this.state.eur;
      for(var c in newArr){
        newArr[c].convert =(Math.round(newArr[c].amount * conr).toFixed(2)) + ' EUR';
      }
    }
    this.setState({transactionArr: newArr})
  };

  usdToMxn(){var objee ={from: 'USD', to: 'MXN',value: 1 }
    this.TransactionList(objee);
  }
  usdToEur(){var objee ={from: 'USD',to: 'EUR',value: 1 }
    this.TransactionList(objee);
  }
  showw(){
    var hide =document.getElementById('hidden');
    var hides =document.getElementById('hiddenn');
    var butt =document.getElementById('bu');
    console.log(hide.style);
    if(hide.style.display===''){
      hide.style.display ='block'
      hides.style.display ='none'
      butt.innerHTML ='Go back'
    }
    else{
      hide.style.display =''
      hides.style.display ='block'
      butt.innerHTML ='See Transaction'

    }
  }

  TransactionList(changes){
    var from =changes.from;
    var to =changes.to;
    var value =changes.value;
    return fetch('https://api.fixer.io/latest?base='+from+'&symbols='+from+','+to)

      .then((response)=> response.json())
      .then((responseJson)=>{
        this.setState({converted: ((responseJson.rates[to]*value)||value)});
        if(to==='MXN'){
          this.setState({mxn: (responseJson.rates[to]*value)})
        }
        if(to==='EUR'){
          this.setState({eur: (responseJson.rates[to]*value)})
        }

      });
  }
  render(){
    return (
      <div>

        <div className='col-md-12' id="hidden" >
           <Convert convertThis={this.convertThis.bind(this)} openModal={this.openModal.bind(this)}/>
           <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Transaction">
              <DialogTransaction save={this.save.bind(this)} closeModal={this.closeModal.bind(this)} transaction={this.transaction.bind(this)}
              amount={this.amount.bind(this)} TransactionProp={this.state.object.title} amountProp={this.state.object.amount} idProp={this.state.object.id}/>
           </Modal>
           <Table transactionArr={this.state.transactionArr} editThis={this.editThis.bind(this)} deleteThis={this.deleteThis.bind(this)}/>
        </div>
        <div className='text-center' id='hiddenn'>
           <Conversion value={this.value.bind(this)} from={this.from.bind(this)} to={this.to.bind(this)} convert={this.convert.bind(this)} convertProp={this.state.converted} />
        </div>
        <button className="btn btn-primary" id="bu" onClick={this.showw}>See transaction</button>
      </div>
    )
  }
}
export default Transaction;
