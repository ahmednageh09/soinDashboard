// import React, { createContext } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import * as userService from '../services/userService'
// import { loginSuccess, logoutSuccess } from '../redux/actions/userAction'
// import { toast } from 'react-toastify'

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//   const user = useSelector((state) => state.auth.user)
//   const dispatch = useDispatch()

//   const login = async (email, password) => {
//     try {
//       const user = await userService.login(email, password)
//       dispatch(loginSuccess(user))
//       toast.success('Login Successful')
//     } catch (err) {
//       toast.error(err.response.data)
//       throw err
//     }
//   }

//   const logout = () => {
//     userService.logout()
//     dispatch(logoutSuccess())
//     toast.success('Logout Successful')
//   }

//   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
// }
