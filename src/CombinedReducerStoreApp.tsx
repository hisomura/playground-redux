import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

function CombinedReducerStoreApp() {
  const counter = useSelector<RootState>((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div onClick={(_e) => dispatch({})}>Counter: {counter}</div>
    </div>
  );
}

export default CombinedReducerStoreApp;
