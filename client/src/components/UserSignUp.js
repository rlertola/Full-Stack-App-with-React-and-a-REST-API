import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class UserSignUp extends Component {
  state = {};

  signUp = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/users`)
      .then(response => {
        this.setState({
          courses: response.data
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <div>
            <form onSubmit={this.signUp}>
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className=""
                  placeholder="First Name"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className=""
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </div>
              <div>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  className=""
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  value={this.state.emailAddress}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className=""
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className=""
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                />
              </div>

              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">
                  Sign Up
                </button>
                <NavLink className="button button-secondary" to="/">
                  Cancel
                </NavLink>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>
            Already have a user account?
            <a href="sign-in.html">Click here</a> to sign in!
          </p>
        </div>
      </div>
    );
  }
}

export default UserSignUp;
