import * as types from '../constants/actionTypes';

const initialState = {
  totalCompleted: 0,
  todoList: [],
};

export default function todoReducer(state = initialState, action) {
  let todoList;

  switch (action.type) {
    case types.ADD_ITEM:
      // Make a copy of the todo list in order to keep the state immutable
      todoList = state.todoList.slice();
      todoList.push(createNewTodo(note, action.payload));

      // return state
      return {
        ...state,
        todoList,
      };

    case types.DELETE_ITEM:
      todoList = state.todoList;
      let deletedItem = getItemIndex(todoList, action.payload);
      todoList.pop(deletedItem);

      return {
        ...state,
        todoList,
      };

    case types.COMPLETE_ITEM:
      todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        totalCompleted: totalCompleted + 1,
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

function getItemIndex(todoList, itemID) {
  return todoList.findIndex((item) => item.id === itemID);
}
