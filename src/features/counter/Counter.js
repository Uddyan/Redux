import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";


export function Counter() {
    //check the state of the counter
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <br />
            <button onClick={() => dispatch(decrement())}>-</button>
            <br />
       
            <button
            aria-label="Increment value of counter by 1 unit"
            onClick={() => dispatch(incrementByAmount(100))}
            >
          Increment by value 
        </button>
        </div>
    );
}
