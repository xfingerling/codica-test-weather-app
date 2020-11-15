import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composeEnhancer);

export default store;
