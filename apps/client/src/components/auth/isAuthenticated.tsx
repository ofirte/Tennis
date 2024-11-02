import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Outlet } from "react-router-dom";

type isAuthenticatedProps = {};
const IsAuthenticated: FC<isAuthenticatedProps> = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    // Redirect to login if user is not authenticated
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default IsAuthenticated;
