import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import axios from 'axios'
import { Navigate } from "react-router-dom";

export default function Login() {
    const { handleLogin, isLogin } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function prepareLogin(event) {
        event.preventDefault()

        axios.post('https://dummyjson.com/auth/login', {
            username,
            password
        }).then(result => {
            handleLogin(result.data)
        }).catch(error => {
            alert(error.message)
        })
    }

    if(isLogin) {
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