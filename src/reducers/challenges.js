import {
  GET_CHALLENGES_PENDING,
  GET_CHALLENGES_SUCCESS,
  EDIT_CHALLENGES_PENDING,
  EDIT_CHALLENGES_SUCCESS
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
    default:
      return state;
  }
}
