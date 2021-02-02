import {
  fetchAddItem,
  fetchGetItem,
  fetchDeleteItem,
  fetchEditItem,
} from '../../service/fetchApi';
import * as action from './contacts-action';
import { errorNotification } from '../../notification/ErrorNotification';

export const getAllItem = () => async dispatch => {
  dispatch(action.getAllItemRequest());
  try {
    const { data } = await fetchGetItem();
    dispatch(action.getAllIItemSuccess(data));
  } catch (error) {
    errorNotification(error.message);
    dispatch(action.getAllIItemError(error.message));
  }
};

export const addItem = item => async dispatch => {
  const contacts = {
    ...item,
  };
  dispatch(dispatch(action.addItemRequest()));

  try {
    const { data } = await fetchAddItem(contacts);
    dispatch(action.addItemSuccess(data));
  } catch (error) {
    errorNotification(error.message);
    dispatch(action.addItemError(error.message));
  }
};

export const deleteItem = item => async dispatch => {
  dispatch(action.deleteItemRequest());
  try {
    await fetchDeleteItem(item.id);
    dispatch(action.deleteItemSuccess(item));
  } catch (error) {
    errorNotification(error.message);
    dispatch(action.getAllIItemError(error.message));
  }
};

export const editItem = item => async dispatch => {
  dispatch(action.editItemRequest());

  try {
    const { data } = await fetchEditItem(item);
    console.log(data);
    dispatch(action.editItemSuccess(data));
  } catch (error) {
    dispatch(action.editItemError(error.message));
    console.log(error);
  }
};
