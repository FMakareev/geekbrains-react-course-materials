import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";
import {createAddUserAction, createRemoveUserAction} from "./store/user";


export const createUser = (user) => ({
    id: Date.now(),
    name: `user_${Date.now()}`,
    ...user,
})

console.log(store);
store.subscribe(() => console.log(store.getState()))



store.dispatch(createAddUserAction(createUser()))
store.dispatch(createAddUserAction(createUser({id: 1})))
store.dispatch(createRemoveUserAction(1))




ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
