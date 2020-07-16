import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newEmployee } from '../actions'

class NewEmployee extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      gender: "",
      title: "",
      unitNumber: "",
      street: "",
      city: "",
      province: "",
      region: "",
      zipCode: "",
      landlineNumber: "",
      mobileNumber: "",
      email: "",
      jobTitle: "",
      employeeNumber: "",
      location: "",
      department: "",
      jobEmail: "",
      salary: "",
      sss: "",
      philhealth: "",
      pagibig: "",
      bir: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()

    const data = {
      "first_name":this.state.firstName,
      "last_name":this.state.lastName,
      "middle_name":this.state.middleName,
      "gender":this.state.gender,
      "title":this.state.title,
      "unit_number":this.state.unitNumber,
      "street":this.state.street,
      "city":this.state.city,
      "province":this.state.province,
      "region":this.state.region,
      "zip_code":this.state.zipCode,
      "landline_number":this.state.landlineNumber,
      "mobile_number":this.state.mobileNumber,
      "email":this.state.email,
      "job_title":this.state.jobTitle,
      "employee_number":this.state.employeeNumber,
      "location":this.state.location,
      "department":this.state.department,
      "job_email":this.state.jobEmail,
      "salary":this.state.salary,
      "sss":this.state.sss,
      "philhealth":this.state.philhealth,
      "pagibig":this.state.pagibig,
      "bir": this.state.bir
    }
    this.props.newEmployee(data)

    setTimeout(() => {
      this.props.history.push('/employees/success');
      this.props.history.replace('/employees');
    }, 500);     
  }

  render() {
    return (
      <div>
        <h4>New Employee</h4>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h5>Personal Details</h5>
          <div className="form-row">
            <div className="form-group col-md-4">
              <input type="text" name="firstName"
                required value={this.state.firstName} onChange={this.onChange} 
              className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group col-md-4">
              <input type="text" name="middleName"
                required value={this.state.middleName} onChange={this.onChange} 
              className="form-control" placeholder="Middle Name" />
            </div>
            <div className="form-group col-md-4">
              <input type="text" name="lastName"
                required value={this.state.lastName} onChange={this.onChange} 
              className="form-control" placeholder="Last Name" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" name="gender"
                required value={this.state.gender} onChange={this.onChange} 
              className="form-control" placeholder="Gender" />
            </div>
            <div className="form-group col-md-6">
              <input type="text" name="title"
                required value={this.state.title} onChange={this.onChange} 
              className="form-control" placeholder="Title" />
            </div>
          </div>

          <p>Address</p>
          <div className="form-row">
            <div className="form-group col-md-2">
              <input type="number" name="unitNumber"
                required value={this.state.unitNumber} onChange={this.onChange} 
              className="form-control" placeholder="Unit Number" />
            </div>

            <div className="form-group col-md-5">
              <input type="text" name="street"
                required value={this.state.street} onChange={this.onChange} 
              className="form-control" placeholder="Street" />
            </div>

            <div className="form-group col-md-5">
              <input type="text" name="city"
                required value={this.state.city} onChange={this.onChange} 
              className="form-control" placeholder="City" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-5">
              <input type="text" name="province"
                required value={this.state.province} onChange={this.onChange} 
              className="form-control" placeholder="Province" />
            </div>

            <div className="form-group col-md-5">
              <input type="text" name="region"
                required value={this.state.region} onChange={this.onChange} 
              className="form-control" placeholder="Region" />
            </div>

            <div className="form-group col-md-2">
              <input type="number" name="zipCode"
                required value={this.state.zipCode} onChange={this.onChange} 
              className="form-control" placeholder="Zip Code" />
            </div>
          </div>

          <p>Contact Details</p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="number" name="mobileNumber"
                required value={this.state.mobileNumber} onChange={this.onChange} 
              className="form-control" placeholder="Mobile Number" />
            </div>

            <div className="form-group col-md-6">
              <input type="number" name="landlineNumber"
                required value={this.state.landlineNumber} onChange={this.onChange} 
              className="form-control" placeholder="Landline Number" />
            </div>
          </div>

          <div className="form-group">
            <input type="email" name="email"
              required value={this.state.email} onChange={this.onChange} 
            className="form-control" placeholder="Email" />
          </div>

          <h5>Job Details</h5>

          <div className="form-row">
            <div className="form-group col-md-4">
              <input type="text" name="jobTitle"
                required value={this.state.jobTitle} onChange={this.onChange} 
              className="form-control" placeholder="Job Title" />
            </div>
            <div className="form-group col-md-8">
              <input type="number" name="employeeNumber"
                required value={this.state.employeeNumber} onChange={this.onChange} 
              className="form-control" placeholder="Employee Number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" name="location"
                required value={this.state.location} onChange={this.onChange} 
              className="form-control" placeholder="Location" />
            </div>
            <div className="form-group col-md-6">
              <input type="text" name="department"
                required value={this.state.department} onChange={this.onChange} 
              className="form-control" placeholder="Department" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-8">
              <input type="email" name="jobEmail"
                required value={this.state.jobEmail} onChange={this.onChange} 
              className="form-control" placeholder="Job Email" />
            </div>
            <div className="form-group col-md-4">
              <input type="number" name="salary"
                required value={this.state.salary} onChange={this.onChange} 
              className="form-control" placeholder="Salary" />
            </div>
          </div>

          <h5>Benefits Details</h5>
          <div className="form-group">
            <input type="text" name="sss"
                required value={this.state.sss} onChange={this.onChange} 
              className="form-control" placeholder="SSS" />
          </div>
          <div className="form-group">
            <input type="text" name="philhealth"
                required value={this.state.philhealth} onChange={this.onChange} 
              className="form-control" placeholder="PHILHEALTH" />
          </div>
          <div className="form-group">
            <input type="text" name="pagibig"
                required value={this.state.pagibig} onChange={this.onChange} 
              className="form-control" placeholder="PAGIBIG" />
          </div>
          <div className="form-group">
            <input type="text" name="bir"
                required value={this.state.bir} onChange={this.onChange} 
              className="form-control" placeholder="BIR" />
          </div>


          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { newEmployee };           

export default connect(null, mapDispatchToProps)(NewEmployee)
