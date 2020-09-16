import * as types from '../constants/actionTypes';

const initialState = {
  totalCompleted: 0,
  lastItemID: 10,
  todoList: [],
};

// Our todo reducer whose job is to take the current state and dispatched action,
// perform operations on the state depending on the `action`, and return the
// new state.
// (NOTE: We use a default `state` value of `initialState`, which we've defined at the top.)
export default function todoReducer(state = initialState, action) {
  let todoList;
  let totalCompleted;

  switch (action.type) {
    case types.ADD_ITEM:
      // Make a copy of the todo list in order to keep the state immutable
      todoList = state.todoList.slice();
      // Compose a new todo item to augment our state with.
      // The action payload will be our `note`, and we'll increment
      // the last item ID to use for the ID.
      // (NOTE: `action.payload` is our `note` value for the new todo.)
      const newTodo = createNewTodo(action.payload, state.lastItemID + 1);
      todoList.push(newTodo);

      // return the new state, replacing the `todoList` and incrementing the `lastItemID`
      return {
        ...state,
        todoList,
        lastItemID: state.lastItemID + 1,
      };

    case types.DELETE_ITEM:
      // Make a copy of our todo list to maintain state immutability.
      // I intentionally used array destructuring here to copy the todo list
      // instead of the `slice()` array method to demonstrate another way to do it.
      todoList = [...state.todoList];
      // Find and delete the item using our helper function at the bottom of the file.
      // (NOTE: `action.payload` is our itemID.)
      let itemIndex = getItemIndexByID(todoList, action.payload);
      // We make sure to keep the `totalCompleted` in sync in case our deleted item
      // was marked completed.
      // (NOTE: I've used the ternary operator instead of a standard `if` statement
      //        in order to make this a bit more concise. Google "ternary operator js"
      //        for specifics on the syntax. It's basically a shorthand `if` statement.)
      totalCompleted = todoList[itemIndex].completed
        ? totalCompleted - 1
        : totalCompleted;
      todoList.splice(itemIndex, 1);

      // return the new state, updating the `todoList` and `totalCompleted`
      return {
        ...state,
        todoList,
        totalCompleted,
      };

    case types.COMPLETE_ITEM:
      // Again, we copy the current state's `todoList` using array destructuring. (Yay ES6!)
      todoList = [...state.todoList];
      // Find and mark completed the item using a helper method.
      // (NOTE: `action.payload` is our item id)
      // (BONUS NOTE: Remember, objects are passed by reference, so we can modify the item
      //              in place in the array without having to splice it back in or anything.)
      let item = getItemById(todoList, action.payload);
      if (item.completed) {
        totalCompleted = state.totalCompleted - 1;
        item.completed = false;
      } else {
        totalCompleted = state.totalCompleted + 1;
        item.completed = true;
      }

      // Return our new state, making sure to increment `totalCompleted` to keep it in sync
      return {
        ...state,
        todoList,
        totalCompleted,
      };

    case types.CLEAR_LIST:
      return {
        ...state,
        todoList: [],
      };

    default:
      return state;
  }
}

//// HELPER FUNCTIONS

function createNewTodo(note, id) {
  return {
    note,
    id,
    completed: false,
  };
}

function getItemById(todoList, itemID) {
  return todoList.find((item) => item.id === itemID);
}

function getItemIndexByID(todoList, itemID) {
  return todoList.findIndex((item) => item.id === itemID);
}
