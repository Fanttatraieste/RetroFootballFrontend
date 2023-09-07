import { combineReducers, createStore } from "redux";
import iconsReducer from "./iconsSlice";
// import resultsReducer from "./resultsSlice";

const rootReducer = combineReducers({
  icons: iconsReducer,
  // results: resultsReducer,
});

// commit
//commit

const store = createStore(rootReducer);

export default store;
