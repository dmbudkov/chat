const { createStore } = require("redux");
const initialState = 0;
const increase = {type: "INCREASE"};
const decrease = {type: "DECREASE"};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(reducer);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

let timer = setInterval(() => {
  store.dispatch(increase);

  if(store.getState() >= 5) {
    clearInterval(timer);
    unsubscribe();
  }
}, 500);