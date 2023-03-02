import React from "react";
import ReactDOM from "react-dom/client";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import App from "./components/App/App";

// Create the rootSaga generator function *WATCHER*
// function* rootSaga() {}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Pass rootSaga into our sagaMiddleware
// sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
