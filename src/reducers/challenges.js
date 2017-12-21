import {
  GET_CHALLENGES_PENDING,
  GET_CHALLENGES_SUCCESS,
  EDIT_CHALLENGES_PENDING,
  EDIT_CHALLENGES_SUCCESS,
  DELETE_CHALLENGES_PENDING,
  DELETE_CHALLENGES_SUCCESS,
  ADD_CHALLENGE_PENDING,
  ADD_CHALLENGE_SUCCESS
} from '../actions/challenges'

export default (state = [], action) => {
  switch (action.type) {
    case GET_CHALLENGES_PENDING:
      return state;
    case GET_CHALLENGES_SUCCESS:
      return [...action.payload.data]
    case EDIT_CHALLENGES_PENDING:
      return state;
    case EDIT_CHALLENGES_SUCCESS:
        let setList = state.map(challenge => {
            if (challenge.id === action.payload.id){
            return action.payload
          }
            return challenge
          })
      return setList;
    case DELETE_CHALLENGES_PENDING:
      return state;
    case DELETE_CHALLENGES_SUCCESS:
      return [...action.payload.data];
    case ADD_CHALLENGE_PENDING:
      return state;
    case ADD_CHALLENGE_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
