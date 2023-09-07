import { combineReducers, createStore } from "redux";
import iconsReducer from "./iconsSlice";

const rootReducer = combineReducers({
  icons: iconsReducer,
});

// commit

const store = createStore(rootReducer);

export default store;
