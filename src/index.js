import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './pages/student';
import Book from './pages/Book';
import Nilai from './pages/Nilai';
import Penjualan from './pages/Penjualan';

import reportWebVitals from './reportWebVitals';
// load library bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-free/js/all"

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();