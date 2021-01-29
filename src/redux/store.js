import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReducer from './contacts/contact-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;

/** state template
 * {
 *   contacts: {
 *       items: [],
 *           filter: ''
 *   }
 * }
 */
