import React, { Component } from 'react';
import Todo from './todo';

const TodoList = React.createClass({
  render: function() {
    let {todos} = this.props;
    let renderTodos = ()=> {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }

});

export default TodoList;
