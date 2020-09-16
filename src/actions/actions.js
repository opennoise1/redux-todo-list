import * as types from '../constants/actionTypes';

// Put all our actions in here
export const addTodo = (itemID) => ({
  type: types.ADD_ITEM,
  payload: itemID,
});

export const deleteTodo = (itemID) => ({
  type: types.DELETE_ITEM,
  payload: itemID,
});

export const completeTodo = (itemID) => ({
  type: types.COMPLETE_ITEM,
  payload: itemID,
});

export const clearList = () => ({
  type: types.CLEAR_LIST,
});
