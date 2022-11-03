import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
    const authState = useSelector(state => state.authHandler)

    if(authState.isLogin) {
        return <Outlet />
    }
    return <Navigate to="/login" />
}