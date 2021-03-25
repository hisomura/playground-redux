import { createStore } from "redux";

type Action = {
  type: "INCREMENT" | "FOOBAR";
};

function counterReducer(state = { count: 0 }, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
