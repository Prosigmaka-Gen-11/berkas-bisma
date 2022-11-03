import { useState } from "react";
import axios from 'axios'
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { setLogin } from "./authSlice"

export default function Login() {
    const authState = useSelector(state => state.authHandler)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function prepareLogin(event) {
        event.preventDefault()

        axios.post('https://dummyjson.com/auth/login', {
            username,
            password
        }).then(result => {
            dispatch(setLogin(result.data))
        }).catch(error => {
            alert(error.message)
        })
    }

    if (authState.isLogin) {
        return <Navigate to="/" />
    }

    return <>
        <h1>Login Page</h1>

        <form onSubmit={prepareLogin}>
            <label>
                Username: <br />
                <input
                    required
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                >
                </input>
            </label>
            <br />
            <label>
                Password: <br />
                <input
                    required
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}>
                </input>
            </label>
            <br />
            <button>
                Login
            </button>
        </form>
    </>
}