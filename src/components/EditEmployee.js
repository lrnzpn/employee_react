import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEmployee, updateEmployee} from '../actions'

class EditEmployee extends Component {

  componentDidMount() {
    this.props.getEmployee(this.props.match.params.id)
    console.log(this.props.match.params.id)
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.defaultValue})
  }

  onSubmit = (e) => {
    e.preventDefault()

    const firstName = this.getFirstName.value
    const lastName = this.getLastName.value
    const middleName = this.getMiddleName.value
    const gender = this.getGender.value
    const title = this.getTitle.value
    const unitNumber = this.getUnitNumber.value
    const street = this.getStreet.value
    const city = this.getCity.value
    const province = this.getProvince.value
    const region = this.getRegion.value
    const zipCode = this.getZipCode.value
    const landlineNumber = this.getLandlineNumber.value
    const mobileNumber = this.getMobileNumber.value
    const email = this.getEmail.value
    const jobTitle = this.getJobTitle.value
    const employeeNumber = this.getEmployeeNumber.value
    const location = this.getLocation.value
    const department = this.getDepartment.value
    const jobEmail = this.getJobEmail.value
    const salary = this.getSalary.value
    const sss = this.getSss.value
    const philhealth = this.getPhilhealth.value
    const pagibig = this.getPagibig.value
    const bir = this.getBir.value
    
    const data = {
      "employee_id": this.props.employee.employee_id,
      // "personal_details": {
      "first_name": firstName,
      "last_name": lastName,
      "middle_name": middleName,
      "gender": gender,
      "title": title,
        // "address": {
      "unit_number": unitNumber,
      "street": street,
      "city": city,
      "province": province,
      "region": region,
      "zip_code": zipCode,
        // },
        // "contact": {
      "landline_number": landlineNumber,
      "mobile_number": mobileNumber,
      "email": email,
        // }
      // },
      // "job_details": {
      "job_title": jobTitle,
      "employee_number": employeeNumber,
      "location": location,
      "department": department,
      "job_email": jobEmail,
      "salary": salary,
      // },
      // "benefits_details": {
      "sss": sss,
      "philhealth": philhealth,
      "pagibig": pagibig,
      "bir": bir
    // }
    }
    this.props.updateEmployee(data)

    setTimeout(() => {
      this.props.history.push(`/employee/${this.props.employee.employee_id}/edit_success`);
      this.props.history.replace(`/employee/${this.props.employee.employee_id}`);
    }, 500);     
  }

  cancel = (e) => {
    this.props.history.push(`/employee/${this.props.employee.employee_id}`)
  }

  render() {

    const employee = this.props.employee
    return (
        <div>
          <h4 className="d-flex justify-content-center" style={{paddingTop: '10px'}}>Edit Employee {employee.employee_id}</h4>
          <hr />
          <form onSubmit={this.onSubmit} style={{width:'95%', margin:'0 auto'}}>
            <h5 style={{margin: '10px'}}>Personal Details</h5>
            <div className="form-group">
                <input type="text" name="firstName" 
                  ref={(input) => this.getFirstName = input}
                 defaultValue={employee.first_name} onChange={this.onChange} 
                className="form-control"  />
              </div>
              <div className="form-group">
                <input type="text" name="middleName"
                  ref={(input) => this.getMiddleName = input}
                 defaultValue={employee.middle_name} onChange={this.onChange} 
                className="form-control"  />
              </div>
              <div className="form-group">
                <input type="text" name="lastName"
                  ref={(input) => this.getLastName = input}
                 defaultValue={employee.last_name} onChange={this.onChange} 
                className="form-control"  />
              </div>  
          
            
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="gender"
                  ref={(input) => this.getGender = input}
                 defaultValue={employee.gender} onChange={this.onChange} 
                className="form-control"  />
              </div>
              <div className="form-group col-md-6">
                <input type="text" name="title"
                  ref={(input) => this.getTitle = input}
                 defaultValue={employee.title} onChange={this.onChange} 
                className="form-control"  />
              </div>
            </div>

            <p style={{margin: '10px'}}>Address</p>
            <div className="form-row">
              <div className="form-group col-md-4">
                <input type="number" name="unitNumber"
                  ref={(input) => this.getUnitNumber = input}
                 defaultValue={employee.unit_number} onChange={this.onChange} 
                className="form-control"  />
              </div>

              <div className="form-group col-md-8">
                <input type="text" name="street"
                  ref={(input) => this.getStreet = input}
                 defaultValue={employee.street} onChange={this.onChange} 
                className="form-control" />
              </div>
          </div>
          
          <div className="form-group">
                <input type="text" name="city"
                  ref={(input) => this.getCity = input}
                 defaultValue={employee.city} onChange={this.onChange} 
                className="form-control" />
          </div>
          
          <div className="form-group">
                <input type="text" name="province"
                  ref={(input) => this.getProvince = input}
                 defaultValue={employee.province} onChange={this.onChange} 
                className="form-control" />
              </div>

            <div className="form-row">
              <div className="form-group col-md-8">
                <input type="text" name="region"
                  ref={(input) => this.getRegion = input}
                 defaultValue={employee.region} onChange={this.onChange} 
                className="form-control" />
              </div>

              <div className="form-group col-md-4">
                <input type="number" name="zipCode"
                  ref={(input) => this.getZipCode = input}
                 defaultValue={employee.zip_code} onChange={this.onChange} 
                className="form-control"  />
              </div>
            </div>

            <p style={{margin: '10px'}}>Contact Details</p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="number" name="mobileNumber"
                  ref={(input) => this.getMobileNumber = input}
                 defaultValue={employee.mobile_number} onChange={this.onChange} 
                className="form-control"  />
              </div>

              <div className="form-group col-md-6">
                <input type="number" name="landlineNumber"
                  ref={(input) => this.getLandlineNumber = input}
                 defaultValue={employee.landline_number} onChange={this.onChange} 
                className="form-control"  />
              </div>
            </div>

            <div className="form-group">
              <input type="email" name="email"
                ref={(input) => this.getEmail = input}
               defaultValue={employee.email} onChange={this.onChange} 
              className="form-control"  />
            </div>

            <h5 style={{margin: '10px'}}>Job Details</h5>

            <div className="form-row">
              <div className="form-group col-md-4">
                <input type="text" name="jobTitle"
                  ref={(input) => this.getJobTitle = input}
                 defaultValue={employee.job_title} onChange={this.onChange} 
                className="form-control"  />
              </div>
              <div className="form-group col-md-8">
                <input type="number" name="employeeNumber"
                  ref={(input) => this.getEmployeeNumber = input}
                 defaultValue={employee.employee_number} onChange={this.onChange} 
                className="form-control"  />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="location"
                  ref={(input) => this.getLocation = input}
                 defaultValue={employee.location} onChange={this.onChange} 
                className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <input type="text" name="department"
                  ref={(input) => this.getDepartment = input}
                 defaultValue={employee.department} onChange={this.onChange} 
                className="form-control" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-8">
                <input type="email" name="jobEmail"
                  ref={(input) => this.getJobEmail = input}
                 defaultValue={employee.job_email} onChange={this.onChange} 
                className="form-control" />
              </div>
              <div className="form-group col-md-4">
                <input type="number" name="salary"
                  ref={(input) => this.getSalary = input}
                 defaultValue={employee.salary} onChange={this.onChange} 
                className="form-control" />
              </div>
            </div>

            <h5 style={{margin: '10px'}}>Benefits Details</h5>
            <div className="form-group">
              <input type="text" name="sss"
                ref={(input) => this.getSss = input}
                 defaultValue={employee.sss} onChange={this.onChange} 
                className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" name="philhealth"
                ref={(input) => this.getPhilhealth = input}
                 defaultValue={employee.philhealth} onChange={this.onChange} 
                className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" name="pagibig"
                ref={(input) => this.getPagibig = input}
                 defaultValue={employee.pagibig} onChange={this.onChange} 
                className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" name="bir"
                ref={(input) => this.getBir = input}
                 defaultValue={employee.bir} onChange={this.onChange} 
                className="form-control" />
            </div>


            <div className="btn-group">
              <button type="submit" className="btn btn-dark">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={this.cancel}>Cancel</button>
            </div>
          </form>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  employee: state.employee
})

const mapDispatchToProps = { getEmployee, updateEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
