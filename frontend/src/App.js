import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import store from "./Reducer/Reducer";
import PrivateRouterTeacher from "./PrivateRouterTeacher";
import PrivateRouterStudent from "./PrivateRouterStudent";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact={true} />
        </Switch>
        <PrivateRouterStudent />
        <PrivateRouterTeacher />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
