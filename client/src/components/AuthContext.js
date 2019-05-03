import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuth: '',
    _id: '',
    name: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: '',
    prevPage: ''
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    return Object.keys(this.state).map(key => {
      return this.setState({
        [key]: localStorage.getItem(key)
      });
    });
  };

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
        console.log('Error fetching data', err);
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
            errors: messages
          });
        } else {
          console.log('Error fetching data', err);
        }
      });
  };

  signOut = () => {
    this.setState({
      isAuth: false,
      name: null,
      emailAddress: null,
      password: null,
      prevPage: null
    });
    localStorage.clear();
  };

  setPrevPage = () => {
    this.setState({
      prevPage: '/courses/create'
    });
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
    localStorage.setItem([e.currentTarget.name], e.currentTarget.value);
  };

  render() {
    const { _id, isAuth, name, errors, prevPage } = this.state;

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
          prevPage,
          setPrevPage: this.setPrevPage
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
