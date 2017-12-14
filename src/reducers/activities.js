import {
  GET_ACTIVITIES_PENDING,
  GET_ACTIVITIES_SUCCESS
} from '../actions/activities'

export default (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVITIES_PENDING:
      return state;
    case GET_ACTIVITIES_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}
