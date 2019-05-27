import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import CourseDetail from './CourseDetail';
import { AuthConsumer } from './AuthContext';

// Individual course buttons on the courses route. Reroutes to the CourseDetail page when clicked.
class Course extends Component {
  render() {
    const { id, title, courseUserId } = this.props;

    return (
      <AuthConsumer>
        {({ isCourseOwner }) => (
          <div className="grid-33">
            <NavLink
              to={`courses/${id}`}
              className="course--module course--link"
              // component={<CourseDetail />}
              onClick={isCourseOwner(courseUserId)}
            >
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{title}</h3>
            </NavLink>
          </div>
        )}
      </AuthConsumer>
    );
  }
}

// React.memo stops component from constantly rerendering.
export default React.memo(Course);
