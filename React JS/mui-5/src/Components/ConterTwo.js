import React, { useReducer } from "react";
const initialSate = {
  firstCounter: 0,
  seconCounter:10,
};
const reducer = (state, action) => { 
  switch (action.type) {
    case "increment":
      return {...state,firstCounter : state.firstCounter+ action.value};
    case "decrement":
      return {...state,firstCounter : state.firstCounter-action.value};
    case "increment2":
      return {...state,seconCounter : state.seconCounter+ action.value};
    case "decrement2":
      return {...state,seconCounter : state.seconCounter-action.value};
    case "reset":
      return initialSate;
    default:
      return state;
  }
};
const ConterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);
  return (
    <div>
      <div>Count first--- ({state.firstCounter})</div>
      <div>Count Second--- ({state.seconCounter})</div>
      <button onClick={() => dispatch({type :"increment" ,value:1})}>Increment by 1</button>
      <button onClick={() => dispatch({type :"decrement" ,value:1})}>Decrement by 1</button>
      <button onClick={() => dispatch({type :"increment" ,value:5})}>Increment by 5</button>
      <button onClick={() => dispatch({type :"decrement" ,value:5})}>Decrement by 5</button>
    
      <button onClick={() => dispatch({type :"increment2" ,value:1})}>Increment2 by 1</button>
      <button onClick={() => dispatch({type :"decrement2" ,value:1})}>Decrement2 by 1</button>
    
      <button onClick={() => dispatch({type :"reset"})}>Reset</button>
    </div>
  );
};

export default ConterTwo;
