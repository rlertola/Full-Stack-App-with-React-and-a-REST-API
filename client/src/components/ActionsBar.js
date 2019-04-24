import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UpdateCourse from './UpdateCourse';
import { AuthConsumer } from './AuthContext';
import axios from 'axios';
import { withAppContext } from './withAppContext';

class ActionsBar extends Component {
  deleteCourse = e => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:5000/api/courses/${this.props.id}`,
        {
          auth: {
            username: this.props.context.state.emailAddress,
            password: this.props.context.state.password
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
