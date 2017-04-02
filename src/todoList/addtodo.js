import React from 'react';


const AddTodo=React.createClass( {
  handleSubmit: function (e) {
    e.preventDefault();
    let todoText=this.refs.todoText.value;
    console.log(todoText)

    if (todoText.length > 0) {
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText)
    }
    else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <input className="form-control" type='text' ref='todoText' placeholder="What do you need to do today?"></input>

        </form>

      </div>
    )
  }

})

export default AddTodo;
