import axios from 'axios'

export const GET_CHALLENGES_PENDING = 'GET_CHALLENGES_PENDING'
export const GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS'
export const EDIT_CHALLENGES_PENDING = 'EDIT_CHALLENGES_PENDING'
export const EDIT_CHALLENGES_SUCCESS = 'EDIT_CHALLENGES_SUCCESS'

export const getChallenges = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CHALLENGES_PENDING })
    let challenges = await axios.get('http://localhost:8000/challenges')
    dispatch({
      type: GET_CHALLENGES_SUCCESS,
      payload: challenges
    })
  }
}

export const editChallenge = (id) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_CHALLENGES_PENDING })
    let challenge = await axios.patch(`http://localhost:8000/challenges/${id}/edit_unlisted`)
    dispatch({
      type: EDIT_CHALLENGES_SUCCESS,
      payload: challenge.data[0]
    })
  }
}
