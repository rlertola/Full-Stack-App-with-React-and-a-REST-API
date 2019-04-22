import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UpdateCourse from './UpdateCourse';
import { AuthConsumer } from './AuthContext';

class ActionsBar extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth }) => (
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100">
                {isAuth ? (
                  <span>
                    <NavLink
                      component={
                        <UpdateCourse
                          course={this.props.course}
                          id={this.props.id}
                        />
                      }
                      to={`${this.props.id}/update`}
                      className="button"
                    >
                      Update Course
                    </NavLink>
                    <NavLink className="button" to="#">
                      Delete Course
                    </NavLink>
                  </span>
                ) : null}
                <NavLink className="button button-secondary" to="/">
                  Return to List
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </AuthConsumer>
    );
  }
}

export default ActionsBar;
