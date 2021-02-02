import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './auth-actions';

const userReducer = createReducer(null, {
  [action.signUpSuccess]: (_, { payload }) => payload.user,
  [action.logInSuccess]: (_, { payload }) => payload.user,
  [action.logOutSuccess]: () => null,
  [action.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const isLoggedInReducer = createReducer(false, {
  [action.getCurrentUserSuccess]: () => true,
  [action.signUpSuccess]: () => true,
  [action.logInSuccess]: () => true,
  [action.logOutSuccess]: () => false,
});

const tokenReducer = createReducer(null, {
  [action.signUpSuccess]: (_, { payload }) => payload.token,
  [action.logInSuccess]: (_, { payload }) => payload.token,
});

const errorReducer = createReducer(null, {
  [action.signUpError]: (_, { payload }) => payload,
  [action.logInError]: (_, { payload }) => payload,
  [action.logOutError]: (_, { payload }) => payload,
  [action.getCurrentUserError]: (_, { payload }) => payload,
});
const loaderReducer = createReducer(false, {
  [action.signUpRequest]: () => true,
  [action.signUpSuccess]: () => false,
  [action.signUpError]: () => false,
  [action.logInRequest]: () => true,
  [action.logInSuccess]: () => false,
  [action.logInError]: () => false,
  [action.logOutRequest]: () => true,
  [action.logOutSuccess]: () => false,
  [action.logOutError]: () => false,
});

const authRootReducer = combineReducers({
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  token: tokenReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default authRootReducer;
