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
    error: ''
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
        console.log('signedup');
        this.signIn();
      })
      .catch(err => {
        console.log(err.response.data.message);
        if (err.response.status === 400) {
          console.log(err.response.data.message.split(/(: )/));
          const msg = err.response.data.message.split(/(: )/);

          this.setState({
            validationError: true,
            error: msg
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
          error: this.state.error
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
