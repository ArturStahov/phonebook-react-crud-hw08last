import * as action from './auth-actions';
import axios from 'axios';
import {
  fetchLogIn,
  fetchSignUp,
  fetchLogOut,
  fetchGetCurrentUser,
} from 'service/fetchApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const LogIn = formData => async dispatch => {
  dispatch(action.logInRequest());

  try {
    const { data } = await fetchLogIn(formData);
    token.set(data.token);
    dispatch(action.logInSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(action.logInError(error.message));
  }
};

export const signUp = formData => async dispatch => {
  dispatch(action.signUpRequest());

  try {
    const { data } = await fetchSignUp(formData);
    token.set(data.token);
    dispatch(action.signUpSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(action.signUpError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(action.logOutRequest());

  try {
    await fetchLogOut();
    token.unset();
    dispatch(action.logOutSuccess());
  } catch (error) {
    console.log(error);
    dispatch(action.logOutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  dispatch(action.getCurrentUserRequest());

  const state = getState();
  const persistedToken = state.auth.token;
  console.log('persistedToken', persistedToken);
  if (persistedToken === null) {
    console.log('Токена нет, уходим из getCurrentUser');
    return;
  }
  token.set(persistedToken);
  try {
    const { data } = await fetchGetCurrentUser();
    console.log('data current user', data);
    dispatch(action.getCurrentUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
