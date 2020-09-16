import * as types from '../constants/actionTypes';

// Put all our actions in here
export const addItem = (itemID) => ({
  type: types.ADD_ITEM,
  payload: itemID,
});

export const deleteItem = (itemID) => ({
  type: types.DELETE_ITEM,
  payload: itemID,
});

export const completeItem = (itemID) => ({
  type: types.COMPLETE_ITEM,
  payload: itemID,
});

export const clearList = () => ({
  type: types.CLEAR_LIST,
});
