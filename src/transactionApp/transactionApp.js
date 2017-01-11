import React, { Component } from 'react';

class Transaction extends Component{
  constructor(props){
    super(props);
    this.state= {from: 'USD',
                 to: 'USD',
                 value : 0,
                 date: 'latest',
                 converted : null
                };
  };
  convert(){
    this.changes={from: this.refs.selectedFrom.value,
                   to: this.refs.selectedTo.value,
                   value: this.refs.value.value};
    this.TransactionList(this.changes);
  }
  TransactionList(changes){

    var from = changes.from;
    var to = changes.to;
    var value = changes.value;
    return fetch('http://api.fixer.io/'+this.state.date+'?base='+from+'&symbols='+from+','+to)
      .then((response)=> response.json())
      .then((responseJson)=>{
        this.setState({converted: ((responseJson.rates[to]*value)||value)+' '+to});
      })
  }

  render(){

      return (
        <div>
            <input type="number" className="main-info-search"
               placeholder="CONVERT ..." ref='value'/>
            <label>Convert Currency From</label>
            <select ref='selectedFrom' >
                <option value="USD">USD</option>
                <option value="MXN">MXN</option>
                <option value="EUR">EUR</option>
            </select>
            <label>Convert Currency To</label>
            <select ref='selectedTo'>
                <option value="USD">USD</option>
                <option value="MXN">MXN</option>
                <option value="EUR">EUR</option>
            </select>
            <input type="button" value='convert' onClick={ this.convert.bind(this) }/>
            <div>{this.state.converted}</div>
        </div>
      )
    }
}
export default Transaction;
