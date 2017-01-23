import React, { Component } from 'react';
import TodoList from './todolist';
import AddTodo from './addtodo.js';
import TodoSearch from './todosearch';
import uuid from 'node-uuid';
import localStorage from './localStorage';

const TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: localStorage.getTodos()
    };
  },
  componentDidUpdate: function () {
    localStorage.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
    }
    return todo;
  });
    this.setState({todos: updatedTodos}); // sets the state to updatedTodos with most current completed state
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = localStorage.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle = {this.handleToggle}/>
        <AddTodo
          onAddTodo = {this.handleAddTodo}>
        </AddTodo>
      </div>
    )

  }
})

export default TodoApp;
