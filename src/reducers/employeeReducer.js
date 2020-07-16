import {
  FETCH_EMPLOYEE,
  UPDATE_EMPLOYEE
} from '../actions/types'

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return action.employee
    case UPDATE_EMPLOYEE:
      return action.payload
    default:
      return state
  }
}

export default employeeReducer