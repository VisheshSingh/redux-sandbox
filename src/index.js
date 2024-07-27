import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';

console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
