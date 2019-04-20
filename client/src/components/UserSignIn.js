import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class UserSignIn extends Component {
  state = {
    emailAddress: '',
    password: ''
  };

  signIn = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/users`)
      .then(response => {
        this.setState({
          emailAddress: this.state.emailAddress,
          password: this.state.password
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
          <h1>Sign In</h1>
          <div>
            <form onSubmit={this.signIn}>
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
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">
                  Sign In
                </button>
                <NavLink className="button button-secondary" to="/">
                  Cancel
                </NavLink>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>
            Don't have a user account?
            <a href="">Click here</a> to sign up!
          </p>
        </div>
      </div>
    );
  }
}

export default UserSignIn;
