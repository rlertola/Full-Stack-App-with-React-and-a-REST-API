import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import CourseDetail from './CourseDetail';

// Individual course buttons on the courses route. Reroutes to the CourseDetail page when clicked.
class Course extends Component {
  render() {
    const { index, id, title } = this.props;

    return (
      <div className="grid-33">
        <NavLink
          className="course--module course--link"
          component={<CourseDetail index={index} />}
          to={`courses/${id}`}
        >
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{title}</h3>
        </NavLink>
      </div>
    );
  }
}

export default Course;
