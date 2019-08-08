import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./Router";
import ErrorBoundary from './modules/app/components/error';


ReactDOM.render(
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>,
  document.getElementById('root')
);
