import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { RootState } from "./store";

function SimpleStoreApp() {
  const counter = useSelector<RootState>(state => state.counter)
  return (
    <div className="App">
      Counter: {counter}
    </div>
  );
}

export default SimpleStoreApp;
