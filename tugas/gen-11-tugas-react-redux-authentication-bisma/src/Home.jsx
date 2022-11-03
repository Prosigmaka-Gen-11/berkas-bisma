import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { setLogout } from "./authSlice"

export default function Home() {
    const navigate = useNavigate()
    const authState = useSelector(state => state.authHandler)
    const dispatch = useDispatch()

    function logout() {
        dispatch(setLogout())
        navigate("/login")
    }

    return <>
        <h1>Home</h1>
        <h2>Welcome, {authState.user.firstName}</h2>
        <p>Your token: {authState.token}</p>
        <Link to="/about">About</Link>
        <br />
        <button onClick={logout}>
            Logout
        </button>
    </>
}