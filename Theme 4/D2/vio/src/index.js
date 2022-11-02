import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let canvas = document.getElementById('canvas');
canvas.style.minWidth = '0';
canvas.style.minHeight = '0';
canvas.style.width = '0px !important';
canvas.style.height = '0px !important'; 


