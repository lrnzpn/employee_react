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
        <div style={{width: '95%',margin:'0 auto',paddingTop:'20px'}}>
          <div>
            <h1>Personal Details</h1>
            <hr />
            <h4 style={{textDecoration:'underline'}} className="pp-blue-txt">{employee.first_name} {employee.middle_name} {employee.last_name}</h4>
            <p>
              Gender: {employee.gender} <br />
              Title: {employee.title}
            </p>
            <p>
              Address: {employee.unit_number} {employee.street}, {employee.city}, <br />{employee.province}, {employee.region}, {employee.zip_code}
            </p>
            <p>
              Contact Details:
               <ul>
                <li>
                  Mobile Number: {employee.mobile_number}
                </li>
                <li>
                  Landline Number: {employee.landline_number}
                </li>
                <li>
                  Email: {employee.email}
                </li>
               </ul>
            </p>
          </div>

          <div>
            <h3>Job Details</h3>
            <p>
              Employee Number: {employee.employee_number} | Title: {employee.job_title}
              <br />
              Location: {employee.location} <br />
              Department: {employee.department} <br />
              Email: {employee.job_email} <br />
              Salary: {employee.salary}
            </p>
          </div>

          <div>
            <h3>Benefits Details</h3>
            <p><b>SSS:</b> <br/>{employee.sss}</p>
            <p><b>PhilHealth:</b><br />{employee.philhealth}</p>
            <p><b>PAGIBIG:</b> <br />{employee.pagibig}</p>
            <p><b>BIR:</b> <br />{employee.bir}</p>
          </div>

          <hr />
          <div className="btn-group p-2">
            <Link
              to={{
              pathname: `/employee/${employee.employee_id}/edit`,
              state: { employee: employee}}} 
              className="btn btn-info pp-blue-bg">
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
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
          <h3>Loading...</h3>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  employee: state.employee,
})

const mapDispatchToProps = { getEmployee, deleteEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
