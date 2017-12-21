import axios from 'axios'

export const GET_CHALLENGES_PENDING = 'GET_CHALLENGES_PENDING'
export const GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS'
export const EDIT_CHALLENGES_PENDING = 'EDIT_CHALLENGES_PENDING'
export const EDIT_CHALLENGES_SUCCESS = 'EDIT_CHALLENGES_SUCCESS'
export const DELETE_CHALLENGES_PENDING = 'DELETE_CHALLENGES_PENDING'
export const DELETE_CHALLENGES_SUCCESS = 'DELETE_CHALLENGES_SUCCESS'
export const ADD_CHALLENGE_PENDING = 'ADD_CHALLENGE_PENDING'
export const ADD_CHALLENGE_SUCCESS = 'ADD_CHALLENGE_SUCCESS'

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
    let challenge = await axios.patch(`https://q3-project-data.herokuapp.com/challenges/${id}/edit_unlisted`)
    dispatch({
      type: EDIT_CHALLENGES_SUCCESS,
      payload: challenge.data[0]
    })
  }
}


export const deleteChallenge = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CHALLENGES_PENDING })
    let challenge = await axios.delete(`https://q3-project-data.herokuapp.com/challenges/${id}/delete_challenge`)
    dispatch({
      type: DELETE_CHALLENGES_SUCCESS,
      payload: challenge
    })
  }
}

export const addChallenge = (challenge) => {
  console.log("this is chall", challenge)
  return async (dispatch) => {
    dispatch({ type: ADD_CHALLENGE_PENDING })
    let challenge = await axios.post('https://q3-project-data.herokuapp.com/challenges/add', challenge)
    dispatch({
      type: ADD_CHALLENGE_SUCCESS,
      payload: challenge
    })
  }
}
