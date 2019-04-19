import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CourseDetail from './CourseDetail';

class Course extends Component {
  render() {
    return (
      <div className="grid-33">
        <NavLink
          className="course--module course--link"
          component={<CourseDetail index={this.props.index} />}
          to={`/${this.props.id}`}
        >
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{this.props.title}</h3>
        </NavLink>
      </div>
    );
  }
}

export default Course;
