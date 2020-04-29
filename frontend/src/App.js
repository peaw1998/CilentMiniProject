import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./Reducer/Reducer";
import PrivateRouterTeacher from "./PrivateRouterTeacher";
import PrivateRouterStudent from "./PrivateRouterStudent";
import PrivateRouterAdmin from "./PrivateRouterAdmin";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact={true} />
        </Switch>
        <PrivateRouterStudent />
        <PrivateRouterTeacher />
        <PrivateRouterAdmin />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
