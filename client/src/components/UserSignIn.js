import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

class UserSignIn extends Component {
  render() {
    console.log(this.props);
    return (
      <AuthConsumer>
        {({ isAuth, handleChange, signIn }) =>
          isAuth ? (
            this.props.history.goBack()
          ) : (
            <div className="bounds">
              <div className="grid-33 centered signin">
                <h1>Sign In</h1>
                <div>
                  <form onSubmit={signIn}>
                    <div>
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        type="text"
                        className=""
                        placeholder="Email Address"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className=""
                        placeholder="Password"
                        onChange={handleChange}
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
                  <NavLink to="/signup"> Click here</NavLink> to sign up!
                </p>
              </div>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default UserSignIn;
