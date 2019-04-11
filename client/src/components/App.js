import React, { Component } from 'react';
import axios from 'axios';
import '../styles/global.css';
import Courses from './Courses';
import Header from './Header';

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
    return (
      <div className="root">
        <div>
          <Header />
          <Courses data={this.state.courses} />
        </div>
      </div>
    );
  }
}

export default App;
