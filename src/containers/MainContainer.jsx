import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../displays/TodoList';
import TodoCreator from '../displays/TodoCreator';

import { addTodo, completeTodo } from '../actions/actions';

// mapStateToProps is a really confusing name when you first see it, but
// what it's doing is exactly what it's named. It's taking the state from your Redux store
// and mapping it to the `props` on your component so that you can access them that way,
// without having to explicitly pass them down through the component tree (A.K.A "prop-drilling").
const mapStateToProps = (state) => ({
  todoList: state.todos.todoList,
  totalCompleted: state.todos.totalCompleted,
});

// NOTE: You could rewrite this a bit cleaner like so using destructuring assignment:
/*
  const mapStateToProps = ({todos}) => ({
    todoList: todos.todoList,
    totalCompleted: todos.totalCompleted,
  });
*/

// mapDispatchToProps is also capable of weirding you out if you let it. It's got the same
// idea going as `mapStateToProps`, where instead of mapping state to your component's `props`,
// it maps your actions (which we've imported at the top).
// NOTE: (Something that really confused me at first was, if you look at your `actions.js`, you'll
//        notice that they literally just return objects with a `type` and a `payload`. They don't
//        actually do anything to your store or state at all, so how could invoking them do anything
//        other than return a simple object representing the action? Well, if you notice at the bottom
//        of the file, we are passing this `mapDispatchToProps` to Redux's `connect` function. What the
//        `connect` function will do is turn those action functions from functions that return simple objects
//        into functions that call `dispatch(action)` on your Redux store. The actual dispatching of actions
//        to the store is abstracted away by the React-Redux library we're using.)
const mapDispatchToProps = {
  addTodo,
  completeTodo,
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // NOTE: (Remember, we get access to these (props) because our component is wrapped in a call to Redux's `connect`,
    //        which maps our Redux store's state and action dispatchers to our component's `props`...
    //        Another way to think about it is that Redux "injects" state and actions from our store into
    //        our component's `props` so that we can use them.)
    // Some more ES6 destructuring assignment goodness 🔥
    const { todoList, totalCompleted, addTodo, completeTodo } = this.props;

    return (
      <div>
        <center>
          <h6 style={{ color: 'lightgrey', padding: 0, margin: 0 }}>
            You've completed {totalCompleted} todos!
          </h6>
        </center>

        {/* Here we pass our `addTodo` action dispatcher as a prop to our TodoCreator */}
        <TodoCreator addTodo={addTodo} />
        {/* 
          Same thing here, except we pass our `todoList` (from our store's state)
          and our `completeTodo` action dispatcher to our TodoList component.
        */}
        <TodoList todoList={todoList} completeTodo={completeTodo} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
