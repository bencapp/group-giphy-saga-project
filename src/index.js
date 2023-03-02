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
function* rootSaga() {
  takeEvery("FETCH_GIFS", fetchGifs);
  takeEvery("GET_CATEGORIES", getCategories)
}

//WORKER GET FROM API
function* fetchGifs() {
  try {
    let response = yield axios.get("/api/favorite");
    yield put({
      type: "SET_GIFS",
      payload: response.data,
    });
  } catch (err) {
    console.log(`error in fetch plants`, err);
  }
}

function* getCategories() {
  try{
    let response = yield axios.get('/api/category'); 
    yield put({type: 'SET_CATEGORIES', payload: response.data});
  } catch (error) {
    console.log('error in get categories');
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

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

const categoriesToDisplay = (state = [], action) => {
  switch(action.type) {
    case "SET_CATEGORIES":
        return action.payload
    default: 
        return state
  }
}


const storeInstance = createStore(
  combineReducers({
    gifsToDisplay,
    favoritesToDisplay,
    categoriesToDisplay
  }),
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
