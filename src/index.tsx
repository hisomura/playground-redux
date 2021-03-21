import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import CombinedReducerStoreApp from './CombinedReducerStoreApp';
import reportWebVitals from './reportWebVitals';
import { simpleStore, combinedReducerStore } from "./store"

console.log(simpleStore)
console.log(combinedReducerStore)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={simpleStore}>
      <CombinedReducerStoreApp/>
    </Provider>
    <Provider store={combinedReducerStore}>
      <CombinedReducerStoreApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
