import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parse from 'parse';

Parse.initialize(
  "IzWYeFjb4qsVpl2vqItLt4pm02I8DwqZNW8pQwZ1", 
  "dFQhdajG0EVpkTAvP7qjuXSHYwP0zyIjrni7od4Z"
  );

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);