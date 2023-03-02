import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";


// Create the rootSaga generator function *WATCHER*
// function* rootSaga() {}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Pass rootSaga into our sagaMiddleware
// sagaMiddleware.run(rootSaga);


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
