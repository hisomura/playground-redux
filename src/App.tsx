import React, { useEffect, useState } from "react";
import "./App.css";
import { store } from "./store";

const dispatch = store.dispatch;

function App() {
  const [count, setCount] = useState(store.getState().count);
  useEffect(() => {
    store.subscribe(() => {
      const currentState = store.getState().count;
      if (count === currentState) return;

      setCount(currentState);
    });
  }, []);

  return (
    <div className="App">
      <div>count: {count}</div>
      <div onClick={(_e) => dispatch({ type: "INCREMENT" })}>INCREMENT</div>
      <div onClick={(_e) => dispatch({ type: "FOOBAR" })}>FOOBAR</div>
    </div>
  );
}

export default App;
