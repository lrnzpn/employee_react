import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EmployeeList extends Component {
  render() {
    if (this.props.employees.length) {
      return (
        <div>
          <h4>Employees</h4>
          {this.props.employees.map(employee => {
            return (
              <div key={employee.employee_id}>
                <hr />
                <h4>
                  <Link to={`/employee/${employee.employee_id}`}>
                    {employee.employee_id}: {employee.personal_details.first_name} {employee.personal_details.last_name}
                  </Link> 
                </h4>
              </div>
            )
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>No Employees Listed</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  employees: state.employees
})

export default connect(mapStateToProps)(EmployeeList);
