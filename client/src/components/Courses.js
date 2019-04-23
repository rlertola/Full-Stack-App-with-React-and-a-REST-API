import React, { Component } from 'react';
import axios from 'axios';
import NewCourseButton from './NewCourseButton';
import Course from './Course';

class Courses extends Component {
  state = {
    courses: {}
  };

  componentDidMount() {
    this.getDataOnLoad();
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

  render() {
    return (
      <div>
        <hr />
        <div className="bounds">
          {Object.keys(this.state.courses).map(key => {
            return (
              <Course
                title={this.state.courses[key].title}
                key={key}
                index={key}
                id={this.state.courses[key]._id}
              />
            );
          })}
          <NewCourseButton />
        </div>
      </div>
    );
  }
}

export default Courses;
