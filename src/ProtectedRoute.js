import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  return auth === false ? children : <Navigate to="/dashbaord/postwork" />;
};

export default ProtectedRoute;
