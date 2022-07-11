import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDecrement,
  getIncrement,
  getReset,
} from "../StateManage/Action/Action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const hendaleIncrement = () => {
    dispatch(getIncrement());
  };
  const hendaleDecrement = () => {
    if(count > 0){
        dispatch(getDecrement());
    }
    
  };
  const hendaleReset = () => {
    dispatch(getReset());
  };

  return (
    <div>
      <h1>Hello! Redux Counter App</h1>

      <h1>{count}</h1>

      <button onClick={hendaleIncrement}>Increment</button>
      <button onClick={hendaleDecrement}>Decrement</button>
      <button onClick={hendaleReset}>Reset</button>
    </div>
  );
};

export default Counter;
