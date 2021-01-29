import { createAction } from '@reduxjs/toolkit';

export const logInRequest = createAction('auth/logInRequest');
export const logInSuccess = createAction('auth/logInSuccess');
export const logInError = createAction('auth/logInError');

export const signUpRequest = createAction('auth/signUpRequest');
export const signUpSuccess = createAction('auth/signUpSuccess');
export const signUpError = createAction('auth/signUpError');

export const logOutRequest = createAction('auth/logOutRequest');
export const logOutSuccess = createAction('auth/logOutSuccess');
export const logOutError = createAction('auth/logOutError');
