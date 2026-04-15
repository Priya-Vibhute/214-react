import React, { useReducer } from "react";

function ReducerExample() {
  const reducer = (state,action) => {
    switch(action.type)
    {
         case 'INC':
             return state+1
         case 'DEC':
            return state-1
         case 'RESET':
            return 0   
         case 'MUL':
            return state*action.payload

    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "MUL", payload: 2 })}
      >
        Multiply by 2
      </button>

      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "MUL", payload: 3 })}
      >
        Multiply by 3
      </button>
    </div>
  );
}

export default ReducerExample;
