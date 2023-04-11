// import rootReducer from "./Reducer/rootReducer";
// import rootReducers from "./";
// import rootReducers from "./reducer";
// import rootReducers from "redux-root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/index";
const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import handleCart from "./handleCart";
// import { combineReducers } from "redux";

// const rootReducers = combineReducers({ handleCart });

// export default rootReducers;
