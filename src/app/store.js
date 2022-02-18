// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default configureStore;



// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
