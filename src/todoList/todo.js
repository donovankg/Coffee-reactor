import React, { Component } from 'react';

const Todo = React.createClass({
  render: function() {
    let {text, id} = this.props

    return (
      <div>
      {text + " id:" + id}

      </div>
    )
  }

})

export default Todo;
