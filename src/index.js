import React from 'react';
import ReactDOM from 'react-dom';
import '@csstools/normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

import './base.css';
import App from './App';

function AppRender() {
  return (
    <React.StrictMode>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<AppRender />, document.querySelector('#root'));
