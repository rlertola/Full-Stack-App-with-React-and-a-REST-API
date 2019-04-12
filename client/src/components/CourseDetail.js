import React, { Component } from 'react';
import axios from 'axios';

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    };
  }

  getDataOnLoad = () => {
    axios
      .get(`http://localhost:5000/api/courses/57029ed4795118be119cc440`)
      .then(response => {
        console.log('response', response);
        this.setState({
          course: response.data
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  componentDidMount() {
    console.log('started');
    this.getDataOnLoad();
  }

  render() {
    return <div>hello</div>;
  }
}

export default CourseDetail;
