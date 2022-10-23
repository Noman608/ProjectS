import React, { useContext } from "react";
import { countContext } from "../App";

const ComponentA = () => {
  const CountContext = useContext(countContext);
  return (
    <div>
      {" "}
      Component A
      <button onClick={() => CountContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => CountContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
