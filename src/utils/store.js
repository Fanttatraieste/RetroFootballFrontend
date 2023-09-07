import { combineReducers, createStore } from "redux";
import iconsReducer from "./iconsSlice";

const rootReducer = combineReducers({
  icons: iconsReducer,
});

const store = createStore(rootReducer);

export default store;
