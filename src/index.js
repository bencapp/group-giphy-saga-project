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
  yield takeEvery("FETCH_GIFS", fetchGifs);
  yield takeEvery("ADD_FAVORITE", postFavorite);
}

//WORKER GET FROM API
function* fetchGifs(action) {
  try {
    let response = yield axios.get(`/api/favorite/${action.payload}`);
    console.log(response);
    yield put({
      type: "SET_GIFS",
      payload: response.data.data,
    });
  } catch (err) {
    console.log(`error in fetch gifs`, err);
  }
}

// WORKER POST
function* postFavorite(action) {
  try {
    yield axios.post(`api/favorite`, { payload: action.payload });
    yield put({
      type: "FETCH_FAVORITES",
    });
  } catch (error) {
    console.log("Error in post favorite:", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// * Reducer for displaying gifs
const gifsToDisplay = (state = [], action) => {
  switch (action.type) {
    case "SET_GIFS":
      return action.payload;
    default:
      return state;
  }
};
// * Reducer for displaying favorited gifs
const favoritesToDisplay = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "SET_FAVORITES":
      return action.payload;
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
