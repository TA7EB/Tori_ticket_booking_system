/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  let location = useLocation();

  if (loading) return <div>Loading</div>;

  if (!isAuthenticated) {
    toast.error(`You must login first!`, {
      style: {
        border: "2px solid red",
        padding: "8px",
        color: "#713200",
      },
      iconTheme: {
        primary: "red",
        secondary: "#FFFAEE",
      },
    });
    return <Navigate state={location.pathname} to="/Login" replace={true} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
