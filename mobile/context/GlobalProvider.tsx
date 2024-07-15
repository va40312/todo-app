import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext(
  // r
);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null)
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        accessToken, 
        setAccessToken,
        todos, setTodos
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;