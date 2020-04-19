import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import StudentHome from "./components/StudentHome";
import Status from "./components/Status";
import { useSelector } from "react-redux";
import MyNav from "./components/StudentNavBar";

const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  let arr = [
    {
      path: "/status",
      component: Status,
    },
    {
      path: "/add",
      component: AddCourse,
    },
    {
      path: "/",
      component: StudentHome,
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
