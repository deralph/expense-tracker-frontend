import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "../../extras/axios";

const AppProvider = React.createContext();

const Context = ({ children }) => {
  // const [currentuser, setcurrentuser] = useState("");

  const [loading, setloading] = useState(true);
  const [user, setuser] = useState();
  const [probs, setProbs] = useState();

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get("expenses");
      setloading(true);
      setuser(data.user);
      setloading(false);
      // console.log("in");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) setloading(false);
      setloading(false);
      setProbs(true);
    }
  }, [setProbs, setuser, setloading]);
  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const [signIn, setSignIn] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  return (
    <AppProvider.Provider
      value={{
        signIn,
        setSignIn,
        sidebar,
        setSidebar,
        loading,
        user,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;
