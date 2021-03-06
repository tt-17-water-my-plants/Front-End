import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { GlobalStyle } from './components/Styles/GlobalStyles'

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
