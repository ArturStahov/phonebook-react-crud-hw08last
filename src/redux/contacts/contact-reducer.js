import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';

const itemsReducer = createReducer([], {
  [action.getAllIItemSuccess]: (_, { payload }) => payload,
  [action.addItemSuccess]: (state, { payload }) => [...state, payload],
  [action.deleteItemSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});

const loadingReducer = createReducer(false, {
  [action.getAllItemRequest]: () => true,
  [action.getAllIItemSuccess]: () => false,
  [action.getAllIItemError]: () => false,

  [action.addItemRequest]: () => true,
  [action.addItemSuccess]: () => false,
  [action.addItemError]: () => false,

  [action.deleteItemRequest]: () => true,
  [action.deleteItemSuccess]: () => false,
  [action.deleteItemError]: () => false,
});

const filterReducer = createReducer('', {
  [action.changeFilter]: (state, { payload }) => payload,
});

const contactsErrorReducer = createReducer('', {
  [action.getAllIItemError]: (_, { payload }) => payload,
  [action.addItemError]: (_, { payload }) => payload,
  [action.deleteItemError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: contactsErrorReducer,
});

export default contactsReducer;
