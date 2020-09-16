import React, { Component } from 'react';
import TodoItem from './TodoItem';

// You can find comments about the specific destructuring syntax and other things
// in the TodoCreator.js file. This is our todo list component that will render our TodoItems.
// I've turned it into a functional component because all it does is render some JSX. There's no
// need to use a full-blown class component with a constructor and all when you won't be using
// any lifecycle methods (ex: `componentDidUpdate`) or local state (ex: `this.state = ......`).

function TodoList({ todoList, completeTodo }) {
  return (
    <div className="todoList">
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // Here we're wrapping our `completeTodo` action dispatcher passed down from our MainContainer
          // to an arrow function that when invoked, will complete THIS specific todo. We're inside a
          // `map()` array method call so we do this for each of our todos in the `todoList`
          completeTodo={() => completeTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
