import React, { Component } from 'react';

const Todo = React.createClass({
  render: function() {
    let {text, id, completed} = this.props

    return (
      <div className = "checkbox" onClick = {() => {
        this.props.onToggle(id);
      }}>
      <label>
        <input type = "checkbox" checked = {completed} />
      {text}
      </label>
      </div>
    )
  }

})

export default Todo;
