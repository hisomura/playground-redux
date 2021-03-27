import React, { useEffect, useState } from "react";
import "./App.css";
import { RootState, store } from "./store";

const dispatch = store.dispatch;
const defaultEqualityFn = (a: unknown, b: unknown) => a === b;

function useSelector<TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = defaultEqualityFn
): TSelected {
  const [selected, setSelected] = useState(selector(store.getState()));

  useEffect(() => {
    let oldSelected: TSelected;
    store.subscribe(() => {
      const currentSelected = selector(store.getState());

      if (equalityFn(selected, currentSelected)) return;

      oldSelected = currentSelected;
      setSelected(currentSelected);
    });
  }, []);

  return selected;
}

function App() {
  const count = useSelector((state) => state.count);

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
