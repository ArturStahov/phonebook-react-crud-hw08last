// import uniqid from 'uniqid';
import { createAction } from '@reduxjs/toolkit';

export const getAllItemRequest = createAction('contacts/getAllIItemRequest');
export const getAllIItemSuccess = createAction('contacts/getAllIItemSuccess');
export const getAllIItemError = createAction('contacts/getAllIItemError');

export const addItemRequest = createAction('contacts/addItemRequest');
export const addItemSuccess = createAction('contacts/addItemSuccess');
export const addItemError = createAction('contacts/addItemError');

export const deleteItemRequest = createAction('contacts/deleteItemRequest');
export const deleteItemSuccess = createAction('contacts/deleteItemSuccess');
export const deleteItemError = createAction('contacts/deleteItemError');

export const changeFilter = createAction('filter/change');
