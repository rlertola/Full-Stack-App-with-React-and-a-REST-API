import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuth: false,
    _id: '',
    name: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    validationError: false,
    errors: ''
  };

  signIn = e => {
    if (e) e.preventDefault();
    axios
      .get(`http://localhost:5000/api/users`, {
        auth: {
          username: this.state.emailAddress,
          password: this.state.password
        }
      })
      .then(response => {
        this.setState({
          isAuth: true,
          _id: response.data.id,
          emailAddress: this.state.emailAddress,
          password: this.state.password,
          name: response.data.name
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  signUp = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/users`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      })
      .then(response => {
        this.signIn();
      })
      .catch(err => {
        if (err.response.status === 400) {
          const errors = err.response.data.message;
          const messages = Object.values(errors).map(err => {
            return err.message;
          });

          this.setState({
            validationError: true,
            errors: messages
          });
        } else {
          console.log('Error fetching data', err);
        }
      });
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  signOut = () => {
    this.setState({
      isAuth: false,
      name: null,
      emailAddress: null,
      password: null
    });
  };

  render() {
    console.log(this.state);
    return (
      <AuthContext.Provider
        value={{
          id: this.state._id,
          state: this.state,
          isAuth: this.state.isAuth,
          signIn: this.signIn,
          signUp: this.signUp,
          signOut: this.signOut,
          name: this.state.name,
          handleChange: this.handleChange,
          errors: this.state.errors
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
