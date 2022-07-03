import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useHistory();

  const [user, setUser] = useState(null);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setloading(false);
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });
    //api criar uma session

    const loggedUser = {
      id: "123",
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret") {
      setUser(loggedUser);
      navigate.push("/home");
    }
  };
  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    navigate.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
