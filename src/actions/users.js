import axios from 'axios'

export const GET_USERS_PENDING = 'GET_USERS_PENDING'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_PENDING })
    let users = await axios.get('http://localhost:8000/users')
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: users
    })
  }
}
