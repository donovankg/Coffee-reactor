import React, { Component } from 'react';


const AddTodo = React.createClass( {
  render: function() {
    let {text, id, handleAddTodo} = this.props

    return (
      <div>
        <input type ={text} placeholder = "What do I need to do today?"></input>
        <button onClick = {()=> handleAddTodo()} className ="btn"> Add Todo </button>

      </div>
    )
  }

})

export default AddTodo;
