import React, { Component } from 'react';
import axios from 'axios';
import ActionsBar from './ActionsBar';

class CourseDetail extends Component {
  state = {
    course: {},
    id: this.props.match.params.id,
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    name: ''
  };

  componentDidMount() {
    this.getCourse();
  }

  getCourse = () => {
    axios
      .get(`http://localhost:5000/api/courses/${this.state.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          course: response.data,
          title: response.data.title,
          description: response.data.description,
          estimatedTime: response.data.estimatedTime,
          materialsNeeded: response.data.materialsNeeded,

          name: `${response.data.user.firstName} ${response.data.user.lastName}`
        });
      })
      .catch(err => {
        console.log('Error fetching data', err);
      });
  };

  render() {
    return (
      <div>
        <ActionsBar id={this.state.id} course={this.state.course} />
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{this.state.title}</h3>
              <p>By {this.state.name}</p>
            </div>
            <div className="course--description">
              <p>{this.state.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats-list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{this.state.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <li>{this.state.materialsNeeded}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
