import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDecrement,
  getIncrement,
  getReset,
} from "../StateManage/Action/Action";
import './Counter.css'

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
    <div className="counterStyle">
      <h1>Hello! Redux Counter App</h1>

      <h1 className="countNumber">{count}</h1>

      <button className="inBtn" onClick={hendaleIncrement}>Increment</button>
      <button className="deBtn" onClick={hendaleDecrement}>Decrement</button>
      <button className="reBtn" onClick={hendaleReset}>Reset</button>
    </div>
  );
};

export default Counter;
