import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: '',
    isLogin: false
}

// function userInitiate() {
//     const savedUser = localStorage.getItem('user')

//     if(savedUser) {
//         const parsedUser = JSON.parse(savedUser)
//         return parsedUser
//     }
//     return {}
// }

// function tokenInitiate() {
//     const savedToken = localStorage.getItem('token')

//     return savedToken ?? null
// }

export const authSlice = createSlice({
    name: 'authHandler',
    initialState,
    reducers: {
        setLogin(state, action) {
            const tempUser = action.payload

            state.user = tempUser
            state.token = tempUser.token
            localStorage.setItem('user', JSON.stringify(tempUser))
            localStorage.setItem('token', tempUser.token)

            state.isLogin = tempUser.token ?? null
        },
        setLogout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            state.user = {}
            state.token = ''

            state.isLogin = false
        }
    }
})

export const { setLogin, setLogout, setIsLogin } = authSlice.actions

export default authSlice.reducer