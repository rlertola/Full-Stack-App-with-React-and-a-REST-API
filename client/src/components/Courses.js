import React, { Component } from 'react';
import axios from 'axios';
import NewCourseButton from './NewCourseButton';
import Course from './Course';

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  getDataOnLoad = () => {
    axios
      .get(`http://localhost:5000/api/courses`)
      .then(response => {
        this.setState({
          courses: response.data
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  componentDidMount() {
    this.getDataOnLoad();
  }

  render() {
    const titles = this.state.courses.map(course => {
      return <Course title={course.title} id={course._id} key={course._id} />;
    });

    return (
      <div>
        <hr />
        <div className="bounds">
          {titles}
          <NewCourseButton />
        </div>
      </div>
    );
  }
}

export default Courses;
