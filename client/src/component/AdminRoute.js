import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
 
const AdminRoute = ({ children }) => {
  const { auth:{user} } = useSelector((state) => ({ ...state }));
 
  if (user.role!="Admin") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" />;
  }
  return children;
};
export default AdminRoute