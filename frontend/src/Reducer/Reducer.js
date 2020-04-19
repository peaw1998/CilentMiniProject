import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import student from "./student";
import teacher from "./teacher";
import course from "./course";
import offer from "./offer";
import auth from "./auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    student: student,
    teacher: teacher,
    course: course,
    offer: offer,
    auth: auth,
  }),
  composeEnhancers(applyMiddleware())
);

export default store;
