import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
const PrivateRoute = ({ children,...rest }) => {
    const {user} = useAuth  ();
    const location = useLocation();
    if(user.email){
        return children
    }
    return  <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;


