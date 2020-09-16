import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render the todo item!
    return (
      <div className="todoList">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
