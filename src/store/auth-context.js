import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout:()=>{},
  tokenVal:""
});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem("token");
  const [token, setToken] = useState(initialState);
  const [tokenVal, setTokenVal]=useState(null);

  const userisLoggedIn = !!token;
  
  const loginHandler = (token) => {
    console.log('called loginhandler');
    setToken(token);
    setTokenVal(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler=()=>{
    localStorage.clear()
    setToken(null)
  }
const values = {
    token: token,
    isLoggedIn: userisLoggedIn,
    login: loginHandler,
   
    logout:logoutHandler,
    tokenVal:tokenVal
  };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;