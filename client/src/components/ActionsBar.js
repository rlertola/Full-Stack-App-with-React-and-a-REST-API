import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';
import { withAppContext } from './withAppContext';
import axios from 'axios';

import UpdateCourse from './UpdateCourse';

class ActionsBar extends Component {
  state = {
    ownsCourse: false
  };

  deleteCourse = e => {
    const { emailAddress, password } = this.props.context.state;

    e.preventDefault();
    axios
      .delete(
        `http://localhost:5000/api/courses/${this.props.id}`,
        {
          auth: {
            username: emailAddress,
            password
          }
        },
        {
          user: this.props.context.id
        }
      )
      .then(response => {
        this.props.withRouter.history.push('/');
      })
      .catch(err => {
        console.log('Error deleting data', err);
      });
  };

  // This prohibits the user from seeing the update and delete buttons if user doesn't own the course.
  // This is instead of the exceeds expectations instruction to redirect user to forbidden page.
  ownsCourse = () => {
    if (this.props.userId === this.props.context.state._id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { course, id } = this.props;
    const ownsCourse = this.ownsCourse();

    return (
      <AuthConsumer>
        {({ isAuth }) => (
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100">
                {isAuth && ownsCourse ? (
                  <span>
                    <NavLink
                      component={<UpdateCourse course={course} id={id} />}
                      to={`${id}/update`}
                      className="button"
                    >
                      Update Course
                    </NavLink>
                    <button className="button" onClick={this.deleteCourse}>
                      Delete Course
                    </button>
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

export default withAppContext(ActionsBar);
