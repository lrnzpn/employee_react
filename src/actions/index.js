import axios from 'axios'
import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE,
  CREATE_EMPLOYEE,
  REPLACE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from './types'


const API = 'http://localhost:5000/api/v2/';

export const getEmployees = () => dispatch => {
  return axios.get(`${API}employees/`)
    .then(res => {
      dispatch({
        type: FETCH_EMPLOYEES,
        employees: res.data
      })
    })
    .catch(err => { throw err })
}

export const newEmployee = (employee) => dispatch => {
  console.log(employee)
  return axios.post(`${API}employees/`, employee)
    .then(res => {
      let data = res.data
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: data
      })
    })
    .catch(err => { throw err })
}

export const getEmployee = (id) => dispatch => {
  return axios.get(`${API}employee/${id}/`)
    .then(res => {
      dispatch({
        type: FETCH_EMPLOYEE,
        employee: res.data
     })
    })
    .catch(err => { throw err })
}

export const deleteEmployee = (id) => dispatch => {
  return axios.delete(`${API}employee/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: {id}
      })
    })
    .catch(err => { throw err })
}

export const updateEmployee = (employee) => {
  const employeeId = employee.employee_id
  return dispatch => {
    
    return axios.patch(`${API}employee/${employeeId}/`, employee)
      .then(res => {
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: res.data
        })
        dispatch({
          type: REPLACE_EMPLOYEE,
          payload: res.data
        })
      })
    .catch(err => { throw err })
  }
}