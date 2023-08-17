import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserReducer from './components/UserReducer';

const store = configureStore({
  reducer: {
    users : UserReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


