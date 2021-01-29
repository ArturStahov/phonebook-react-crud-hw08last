import {
  fetchAddItem,
  fetchGetItem,
  fetchDeleteItem,
} from '../../service/fetchApi';
import * as action from './contacts-action';
import { errorContactsHandler } from '../../notification/ErrorNotification';

export const getAllItem = () => async dispatch => {
  dispatch(action.getAllItemRequest());
  try {
    const { data } = await fetchGetItem();
    dispatch(action.getAllIItemSuccess(data));
  } catch (error) {
    errorContactsHandler(error);
    dispatch(action.getAllIItemError(error));
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
    errorContactsHandler(error);
    dispatch(action.addItemError(error));
  }
};

export const deleteItem = item => async dispatch => {
  dispatch(action.deleteItemRequest());
  try {
    const response = await fetchDeleteItem(item.id);
    dispatch(action.deleteItemSuccess(item));
  } catch (error) {
    errorContactsHandler(error);
    dispatch(action.getAllIItemError(error));
  }
};
