import React, { useEffect, useState } from "react";
import "./App.css";
import { store } from "./store";

const dispatch = store.dispatch;

function App() {
  const [count, setCount] = useState(store.getState().count);
  useEffect(() => {
    let oldCount = count;
    store.subscribe(() => {
      const currentCount = store.getState().count;
      if (oldCount === currentCount) return;

      oldCount = currentCount;
      setCount(currentCount);
    });
  }, []);

  return (
    <div className="App">
      <div className="count">count: {count}</div>
      <div className="button" onClick={(_e) => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </div>
      <div className="button" onClick={(_e) => dispatch({ type: "FOOBAR" })}>
        FOOBAR
      </div>
    </div>
  );
}

export default App;
