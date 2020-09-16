import React, { Component } from 'react';

// Destructuring the props for better readability
function TodoItem({ todo, completeTodo }) {
  // Conditionally cross out this todo if it's completed
  const style = { textDecoration: todo.completed ? 'line-through' : 'none' };
  return (
    <div onClick={completeTodo} className="todoItem" style={style}>
      {todo.note}
    </div>
  );
}

export default TodoItem;
