import React, { Component } from 'react';
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import EmployeeList from './components/EmployeeList'
import Employee from './components/Employee'
import { Router, Route, NavLink, Switch } from 'react-router-dom'
import history from './history'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark pp-blue-bg">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink exact
          className="nav-link"
          activeClassName="active"
          to="/employees">
            Employees
          </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact
          className="nav-link"
          activeClassName="active"
          to="/employees/new">
            New Employee
        </NavLink>
      </li>
    </ul>
  </nav>
)

const Main = () => (
  <Switch>
    <Route exact path="/" component={EmployeeList} />
    <Route exact path="/employees" component={EmployeeList} />
    <Route exact path="/employees/new" component={NewEmployee} />
    <Route exact path="/employee/:id" component={Employee} />
    <Route exact path="/employee/:id/edit" component={EditEmployee} />
  </Switch>
)

export default App;
