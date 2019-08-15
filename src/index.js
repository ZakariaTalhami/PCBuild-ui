import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import AppRouter from "./Router";
import ErrorBoundary from './modules/app/components/error';
import Fonts from './modules/app/components/fonts';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <ErrorBoundary>
    <Fonts></Fonts>
    <AppRouter />
  </ErrorBoundary>,
  document.getElementById('root')
);
