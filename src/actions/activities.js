import axios from 'axios'

export const GET_ACTIVITIES_PENDING = 'GET_ACTIVITIES_PENDING'
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'

export const getActivities = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ACTIVITIES_PENDING })
    let activities = await axios.get('https://q3-project-data.herokuapp.com/activities')
    dispatch({
      type: GET_ACTIVITIES_SUCCESS,
      payload: activities
    })
  }
}
