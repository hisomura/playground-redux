import { combineReducers, createStore } from "redux";

type CounterAction = {
  type: "INCREMENT" | "DECREMENT";
};

function counter(state = 0, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function tripleCounter(state = 0, action: CounterAction | { type: "RESET" }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export const simpleStore = createStore(counter);

const rootReducers = combineReducers({ counter, tripleCounter });
export const combinedReducerStore = createStore(rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
