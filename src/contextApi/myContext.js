import React, { createContext, useState } from "react";

// initialize contextApi from React
export const MyContext = createContext();

// create context provider
export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
