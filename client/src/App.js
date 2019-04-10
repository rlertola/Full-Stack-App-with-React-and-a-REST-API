import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    this.getDataOnLoad();
  }

  getDataOnLoad = () => {
    axios
      .get(`http://localhost:5000/api/courses`)
      .then(response => {
        console.log(response.data);
        this.setState({
          courses: response.data
        });
      })

      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  render() {
    return <div className="App">Here</div>;
  }
}

export default App;
