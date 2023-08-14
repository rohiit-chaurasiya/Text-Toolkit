import React from 'react'
import { createContext, useContext, useState } from 'react';

const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
    const [username, setUsername] = useState('');
  
    return (
      <UsernameContext.Provider value={{ username, setUsername }}>
        {children}
      </UsernameContext.Provider>
    );
  };
  
  export const useUsername = () => {
    return useContext(UsernameContext);
  };
