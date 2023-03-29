import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addLogin, addType, addId, addToken } from '../../store/authSlice';
import { Outlet } from "react-router-dom";


const AuthUser = () => {
    let dispatch = useDispatch();
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

        dispatch(addLogin(checkLogin));
        dispatch(addType(checkAdmin));
    }

    if (isLoggedIn == false || isLoggedIn == undefined) {
        return <Navigate to="/signin" replace />;
    } else if (isAdmin == true || isLoggedIn == undefined) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
    // return children;
}

export default AuthUser;
