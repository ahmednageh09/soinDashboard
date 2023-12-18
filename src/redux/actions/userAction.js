import { loginUser } from '../../services/userService'

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await loginUser(userData.email, userData.password)
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response,
      })
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error,
      })
    }
  }
}
