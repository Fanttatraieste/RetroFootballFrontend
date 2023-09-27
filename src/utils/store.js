import { combineReducers, createStore } from "redux";
import iconsReducer from "./iconsSlice";
import oneIconReducer from "./oneIconSlice";

// import resultsReducer from "./resultsSlice";

const rootReducer = combineReducers({
  icons: iconsReducer,
  oneIcon: oneIconReducer,
  // results: resultsReducer,
});

// commit
//commit

const store = createStore(rootReducer);

export default store;
