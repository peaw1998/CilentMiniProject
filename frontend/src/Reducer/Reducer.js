import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "./course";
import auth from "./auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    course: course,
    auth: auth,
  }),
  composeEnhancers(applyMiddleware())
);

export default store;
