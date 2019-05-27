import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

// Handles SignIn/Out/Up.
// Uses localStorage to persist user credentials.
class AuthProvider extends Component {
  state = {
    isAuth: false,
    _id: null,
    name: null,
    firstName: null,
    lastName: null,
    emailAddress: null,
    password: null,
    confirmPassword: null,
    errors: null,
    ownsCourse: false
  };

  componentDidMount() {
    this.updateState();
  }

  // Sets state to user creds in localStorage.
  updateState = () => {
    return Object.keys(this.state).map(key => {
      return this.setState({
        [key]: localStorage.getItem(key)
      });
    });
  };

  // Updates localStorage when signing up/in.
  updateStorage = () => {
    return Object.keys(this.state).map(key => {
      return localStorage.setItem(key, this.state[key]);
    });
  };

  signIn = e => {
    const { emailAddress, password } = this.state;

    if (e) e.preventDefault();
    axios
      .get(`http://localhost:5000/api/users`, {
        auth: {
          username: emailAddress,
          password
        }
      })
      .then(response => {
        this.setState({
          isAuth: true,
          _id: response.data.id,
          emailAddress,
          password,
          name: response.data.name
        });
        this.updateStorage();
      })
      .catch(err => {
        console.log('Error signing in', err);
      });
  };

  signUp = e => {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword
    } = this.state;

    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/users`, {
        firstName,
        lastName,
        emailAddress,
        password,
        confirmPassword
      })
      .then(() => {
        this.signIn();
      })
      .catch(err => {
        if (err.response.status === 400) {
          const errors = err.response.data.message;
          const messages = Object.values(errors).map(err => {
            return err.message;
          });
          this.setState({
            errors: messages
          });
        } else {
          console.log('Error signing up', err);
        }
      });
  };

  // Logs user out and clears localStorage.
  signOut = () => {
    this.setState({
      isAuth: false,
      name: null,
      emailAddress: null,
      password: null
    });
    localStorage.clear();
  };

  isCourseOwner = courseId => e => {
    if (this.state._id === courseId) {
      this.setState({
        ownsCourse: true
      });
      // localStorage.setItem('ownsCourse', true);
    } else {
      this.setState({
        ownsCourse: false
      });
      // localStorage.setItem('ownsCourse', false);
    }
  };

  // Updates as user types in inputs.
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
    localStorage.setItem([e.currentTarget.name], e.currentTarget.value);
  };

  render() {
    const { _id, isAuth, name, errors, ownsCourse } = this.state;

    return (
      <AuthContext.Provider
        value={{
          id: _id,
          state: this.state,
          isAuth,
          signIn: this.signIn,
          signUp: this.signUp,
          signOut: this.signOut,
          name,
          handleChange: this.handleChange,
          errors,
          isCourseOwner: this.isCourseOwner,
          ownsCourse
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
