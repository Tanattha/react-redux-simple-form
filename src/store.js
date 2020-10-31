import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { formReducers } from "./reducers/formReducer";

const store = createStore(
  combineReducers({
    form: formReducers,
  })
);
  compose(applyMiddleware(thunk));
export default store;
