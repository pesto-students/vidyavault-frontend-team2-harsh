import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const AuthUser = ({ children }) => {

    let isAdmin;
    let isLoggedIn;

    const item1 = localStorage.getItem("isAdmin");
    const item2 = localStorage.getItem("isLoggedIn");

    if (!item1 && !item2) {
        <Navigate to="/signin" replace />;
    } else {
        let checkAdmin = JSON.parse(item1);
        let checkLogin = JSON.parse(item2);
        isAdmin = checkAdmin;
        isLoggedIn = checkLogin;
    }

    if (isLoggedIn == false || isLoggedIn == undefined) {
        return <Navigate to="/signin" replace />;
    } else if (isAdmin == false || isAdmin == undefined) {
        return <Navigate to="/signin" replace />;
    }
    
    return <Outlet />;
    // return children;
}

export default AuthUser;
