import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS
} from '../actions/users'

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return state;
    case GET_USERS_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}
