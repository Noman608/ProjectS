import React from "react";
// import ComponentC from "./ComponentC";
import CounterThree from "./Components/CounterThree";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <React.Fragment>
      {/* <UserContext.Provider value={"Noman"}>
        <ChannelContext.Provider value={'Some-Thing '} >
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CounterThree/>
    </React.Fragment>
  );
}

export default App;
