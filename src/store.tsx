import {createStore} from 'redux'

type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT'
}

function counter(state = 0, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)
export default store;