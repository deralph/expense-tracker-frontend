import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "../../extras/axios";

interface ContextType {
  signIn:boolean
  setSignIn(value: boolean): void
  sidebar:boolean
  setSidebar(value: boolean): void
  loading:boolean
  setloading(value: boolean): void
  setuser(value: string): void
  user:string
}

const AppProvider = React.createContext<ContextType|null>(null);

interface props{
  children:JSX.Element
}

const Context = ({ children }:props) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState('');
  const [probs, setProbs] = useState(false);

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get("expenses");
      console.log(data)
      setloading(true);
      setuser(data.user);
      setloading(false);
      // console.log("in");
    } catch (error:any) {
      // console.log(error);
      if (error.response.status === 401) {
        setloading(false);
      }
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
        setloading,
        setuser,
        user,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider) as ContextType;

export default Context;
