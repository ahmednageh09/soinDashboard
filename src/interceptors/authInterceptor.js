// import axios from 'axios'
// import UniversalCookie from 'universal-cookie'

// // set token in the header of each request

// const cookies = new UniversalCookie()

// axios.interceptors.request.use(
//   (config) => {
//     const token = cookies.get('token')
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// // Set HttpOnly and Secure attributes for the 'token' cookie
// // cookies.set('token', null, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
// cookies.set('token', token, {
//   path: '/',
//   expires: 7,
//   secure: true,
//   httpOnly: true,
//   sameSite: 'strict',
// })

// axios.interceptors.request.use(
//   (config) => {
//     const token = cookies.get('token')
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     } else {
//       navigate('/login')
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// import axios from 'axios'
// import cookies from 'universal-cookie'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const instance = axios.create()

// instance.interceptors.request.use(
//   (config) => {
//     // const token = cookies.get('token')
//     // if (token) {
//     //   config.headers['Authorization'] = `Bearer ${token}`
//     // } else {
//     //   useNavigate('/login')
//     //   toast.error('You Are No Authorized To Access!')
//     // }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// export default instance
