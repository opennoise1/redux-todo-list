import * as types from '../constants/actionTypes';

const initialState = {
  totalCompleted: 0,
  todoList: [],
};

export default function todoReducer(state = initialState, action) {
  let todoList;

  switch (action.type) {
    case types.ADD_ITEM:
      todoList = state.todoList;
      todoList.push(createNewTodo(note, itemId));

      // return state
      return {
        ...state,
        todoList,
      };

    case types.DELETE_ITEM:
      toDoList = state.toDoList;
      let deletedItem = getItemIndex(toDoList, itemId);
      todoList.pop(deletedItem);

      return {
        ...state,
        toDoList,
      };

    case types.COMPLETE_ITEM:
      totalCompleted = totalCompleted + 1;
      // TODO: update the todo item with {completed: true}
      return {
        ...state,
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

function createNewTodo(note, id) {
  return {
    note,
    id,
  };
}

function getItemById(todoList, itemID) {
  return todoList.find((item) => item.id === itemID);
}

function getItemIndex(todoList, itemID) {
  return todoList.findIndex((item) => item.id === itemID);
}
