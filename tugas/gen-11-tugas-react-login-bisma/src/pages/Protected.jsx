import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Protected() {
    const { isLogin } = useContext(AuthContext)

    if(isLogin) {
        return <Outlet />
    }
    return <Navigate to="/login" />
}