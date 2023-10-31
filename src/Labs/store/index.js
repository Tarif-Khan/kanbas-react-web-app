import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxEamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxEamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxEamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxEamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;
