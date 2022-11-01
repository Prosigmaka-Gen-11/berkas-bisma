import { createContext, useState } from "react"
// import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    // const navigate = useNavigate()

    const [user, setUser] = useState(function () {
        const savedUser = localStorage.getItem('user')

        if(savedUser) {
            const parsedUser = JSON.parse(savedUser)
            return parsedUser
        }
        return {}
    })

    const [token, setToken] = useState(function () {
        const savedToken = localStorage.getItem('token')

        return savedToken ?? null
    })

    const isLogin = token != null

    function handleLogin(data) {
        setUser(data)
        setToken(data.token)
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('token', data.token)
    }

    function handleLogout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser({})
        setToken('')
        // navigate('/login')
    }

    return <AuthContext.Provider value={{
        user,
        setUser,

        token,
        setToken,

        isLogin,
        handleLogin,
        handleLogout
    }}>
        {children}
    </AuthContext.Provider>
}