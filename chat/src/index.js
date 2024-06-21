import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


