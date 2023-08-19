import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import listTestsReducer from "./listTestsReducer";
import testReducer from "./testReducer";

let reducers = combineReducers({
  listTestsData: listTestsReducer,
  testData: testReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

// window.store = store;
export default store;
