import React, { Component } from 'react';
import TodoList from './todolist';
import AddTodo from './addtodo.js';

const TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      todos: [
        {
        id: 1,
        text: 'go to gym'
      },
      {
        id:2,
        text: 'pick up milk'
      }
      ]
    };
  },
  handleAddTodo: function () {
    alert("working");
  },
  render: function () {
    let {todos} = this.state;
    return (
      <div>
      <TodoList todos={todos}/>
      <AddTodo
        handleAddTodo = {this.handleAddTodo.bind(this)}>
      </AddTodo>
      </div>
    )

  }
})

export default TodoApp;
