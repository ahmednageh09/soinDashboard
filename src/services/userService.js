// import axios from '../axiosConfig'
import UniversalCookie from 'universal-cookie'
// import { useNavigate } from 'react-router-dom'

const cookies = new UniversalCookie()

export const getUser = () => {
  const userCookie = cookies.get('user')
  return userCookie ? userCookie : null
}

export const loginUser = async (email, password) => {
  try {
    console.log('start process')
    // const response = await axios
    // .post('https://jsonplaceholder.typicode.com/posts')
    await fetch('https://soin.serv5group.com/demo2/api/admin/countries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include any other headers your API requires

        // The following header is crucial for CORS
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        console.log('start success')
        console.log(response.json())
      })
      .catch((json) => {
        console.log('start error')
        alert(json)
      })

    // return response
  } catch (error) {
    throw error
  }
}

// export const logout = () => {
//   cookies.remove('user')
// }

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       // Handle unauthorized access
//       useNavigate('/login')
//     }
//     return Promise.reject(error)
//   },
// )
