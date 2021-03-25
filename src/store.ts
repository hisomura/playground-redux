import { createStore } from "redux";

type Action = {
  type: "INCREMENT" | "FOOBAR";
};

function counterReducer(state = 0, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
