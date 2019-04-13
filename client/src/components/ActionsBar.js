import React from 'react';
import { NavLink } from 'react-router-dom';
import UpdateCourse from './UpdateCourse';

// Part of CourseDetail.js.
const ActionsBar = props => {
  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <span>
            <NavLink
              className="button"
              component={<UpdateCourse />}
              to={`${props.id}/update`}
            >
              Update Course
            </NavLink>
            <NavLink className="button" to="#">
              Delete Course
            </NavLink>
          </span>
          <NavLink className="button button-secondary" to="/">
            Return to List
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
