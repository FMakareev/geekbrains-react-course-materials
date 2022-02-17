import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setupWorker } from 'msw'
const handlers = [];

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
