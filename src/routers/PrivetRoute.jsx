import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/signin'}></Navigate>;
};

export default PrivetRoute;
