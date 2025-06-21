import React, { useReducer } from 'react';

const initialValue = { count: 0 };

const reduceFunction = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reduceFunction, initialValue);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
