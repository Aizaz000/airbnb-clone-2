import React, { createContext, useState } from 'react'; // Import React createContext useState
export const GlobalContext = createContext();           // Create a new context named GlobalContext that will be used to share states across components

export const GlobalProvider = ({ children }) => { // Define a provider component that will wrap around the components needing access to the context
  
  const [Search, setSearch] = useState("");     // Declare a state variable Search with an initial value of an empty string. setSearch is the function to update this state.
  const [Category, setCategory] = useState(""); // Declare a state variable Category with an initial value of an empty string. setCategory is the function to update this state.
  const [Id, setId] = useState("");             // Declare a state variable Id with an initial value of an empty string. setId is the function to update this state.
    
  return (
    <GlobalContext.Provider value={{ Search, setSearch, Category, setCategory, Id, setId }}> {/* The context provider allows other components within it to access and modify the shared states */}
      {children}                                                                             {/* The 'children' prop allows this provider to wrap any child components that need access to the context */}
    </GlobalContext.Provider>
  );
};