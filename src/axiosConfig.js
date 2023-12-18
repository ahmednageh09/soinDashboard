// import axios from 'axios'

// export const login = async (email, password) => {
//   const { data } = await axios.post('https://soin.serv5group.com/demo2/api/admin/login', {
//     email,
//     password,
//   })
//   return data
// }

// import axios from 'axios'
// const instance = axios.create({
//   baseURL: 'https://soin.serv5group.com/demo2/api/admin',
// })
// export default instance

// axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/'

// import axiosInterceptors from './interceptors/authInterceptor'

// const axiosInstance = axiosInterceptors
// const domain = 'https://soin.serv5group.com'
// const prefix = '/demo2/api/admin'

// axiosInstance.defaults.baseURL = domain + prefix

// axiosInstance.defaults.timeout = 5000;
// axiosInstance.defaults.headers['Content-Type'] = 'application/json'

// export default axiosInstance
