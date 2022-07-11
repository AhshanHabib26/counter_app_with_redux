import { createStore } from "redux";
import CounterReducers from "../Componnet/StateManage/Reducer/CounterReducer";

const store = createStore(CounterReducers)

export default store

