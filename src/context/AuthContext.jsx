/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (passanger_email,passanger_pass) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/check_passanger",
        {
          passanger_email,
          passanger_pass,
        }
      );
      if (response.data.status === "true") {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setIsAuthenticated(true);
        setUser(response.data.user);
        return response.data;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
