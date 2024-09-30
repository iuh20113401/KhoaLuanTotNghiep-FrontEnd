import { createStore } from "redux";
import rootReducer from "./reducers"; // Assume you have a rootReducer combining your reducers

// Create the Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
