import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// * Reducer for displaying gifs
const gifsToDisplay = (state = [], action) => {
  switch (action.type) {
    // TODO: add switch state
    // case "ADD_GIF":
    //   return [...state, action.payload];
    // case "SET_GIFS":
    //   return action.payload;
    default:
      return state;
  }
};
// * Reducer for displaying favorited gifs 
const favoritesToDisplay = (state = [], action) => {
  switch (action.type) {
    // TODO: add switch state
    // case "ADD_FAVORITES":
    //   return [...state, action.payload];
    // case "SET_FAVORITES":
    //   return action.payload;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    gifsToDisplay,
    favoritesToDisplay,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
