import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const { user, token, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        navigate("/login")
    }

    return <>
        <h1>Home</h1>
        <h2>Welcome, {user.firstName}</h2>
        <p>Your token: {token}</p>
        <Link to="/about">About</Link>
        <br />
        <button onClick={logout}>
            Logout
        </button>
    </>
}