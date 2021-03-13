import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, Switch } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";
import history from "./history";
import SignUp from "./components/Auth/signUp";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path="/" exact component={SignUp} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}
document.addEventListener("DOMContentLoaded", main);
