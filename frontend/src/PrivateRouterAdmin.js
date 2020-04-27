import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import AdminWaiting from "./components/AdminWaiting";
import AdminSuccess from "./components/AdminSuccess";
import { useSelector } from "react-redux";
import MyNav from "./components/AdminNavBar";

const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  let arr = [
    {
      path: "/admin",
      component: AdminHome,
    },
    {
      path: "/admin/waiting",
      component: AdminWaiting,
    },
    {
      path: "/admin/success",
      component: AdminSuccess,
    },
  ];

  if (auth.login === true)
    return (
      <>
        <Switch>
          {arr.map((item) => {
            return <Route path={item.path} component={MyNav} exact={true} />;
          })}
        </Switch>
        <Switch>
          {arr.map((item) => {
            return (
              <Route path={item.path} component={item.component} exact={true} />
            );
          })}
        </Switch>
      </>
    );
  return <Redirect to="/login" />;
};

export default PrivateRouter;
