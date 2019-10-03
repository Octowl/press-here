import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  counter: 1,
  colors: 0,
  duplicates: 0
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case "ADD_BUTTON":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "INCREMENT_COLOR":
      return {
        ...state,
        colors: state.colors + 1
      };
    case "INCREMENT_DUPS":
      return {
        ...state,
        duplicates: state.duplicates + 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
