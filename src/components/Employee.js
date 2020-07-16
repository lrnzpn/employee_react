import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEmployee, deleteEmployee} from '../actions'

class Employee extends Component {

  componentDidMount() {
    this.props.getEmployee(this.props.match.params.id)
  }

  render() {
    const employee = this.props.employee

    if (employee) {
      
      return (
          <div>
            <h3>{employee.first_name}</h3>
          <p>{employee.city}</p>
          <p>{employee.mobile_number}</p>
          <h1>{employee.job_title}</h1>
          <b>{employee.sss}</b>
          <hr />
          <div className="btn-group">
            <Link
              to={{
              pathname: `/employee/${employee.employee_id}/edit`,
              state: { employee: employee}}} 
              className="btn btn-info">
              Edit
            </Link>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                this.props.deleteEmployee(employee.employee_id)
                setTimeout(() => {
                  this.props.history.push('/employees/delete');
                  this.props.history.replace('/employees');
                }, 500);     
              }}>
              Delete  
            </button>
            <Link to="/employees" className="btn btn-secondary">Close</Link>
          </div>
        </div>
        )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  employee: state.employee,
})

const mapDispatchToProps = { getEmployee, deleteEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
