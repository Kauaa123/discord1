import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app'; 
import App1 from './app/index1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1 />
  </React.StrictMode>
);