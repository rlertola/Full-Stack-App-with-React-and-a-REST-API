import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuth: false,
    name: '',
    emailAddress: '',
    password: ''
  };

  signIn = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/users`, {
        auth: {
          username: this.state.emailAddress,
          password: this.state.password
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          isAuth: true,
          emailAddress: this.state.emailAddress,
          password: this.state.password,
          name: response.data.name
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

  signOut = () => {
    this.setState({
      isAuth: false
    });
  };

  render() {
    console.log(this.state);
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          signIn: this.signIn,
          signOut: this.signOut,
          name: this.state.name,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
