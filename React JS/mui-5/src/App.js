import React, { useReducer } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

export const countContext = React.createContext();

const initialSate = 0;
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialSate;
    default:
      return count;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialSate);
  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <>
        Count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </>
    </countContext.Provider>
  );
}

export default App;
