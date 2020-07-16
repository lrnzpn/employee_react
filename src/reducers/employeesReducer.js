import {
  FETCH_EMPLOYEES,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  REPLACE_EMPLOYEE
} from '../actions/types'

const initialState = {
  employees: []
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.employees
    case CREATE_EMPLOYEE:
      return [...state,action.payload]
    case DELETE_EMPLOYEE:
      return state.filter(employee => employee.employee_id !== action.payload.id)
    case REPLACE_EMPLOYEE:
      return state.map((employee => {
        if (employee.employee_id === action.payload.id) {
          return [
            ...employee,
            action.payload
          ]
        } else {
          return employee
        }
      }))
    default:
      return state
  }
}

export default employeesReducer