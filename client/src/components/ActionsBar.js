import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';

import UpdateCourse from './UpdateCourse';
import { AuthConsumer } from './AuthContext';
import { withAppContext } from './withAppContext';

class ActionsBar extends Component {
  // Redirects to the courses page after deletion.
  deleteCourse = e => {
    e.preventDefault();
    const { ownsCourse } = this.props.context;
    const { emailAddress, password } = this.props.context.state;
    if (!ownsCourse) {
      return this.props.withRouter.history.push('/forbidden');
    }

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
      .then(() => {
        this.props.withRouter.history.push('/');
      })
      .catch(err => {
        if (err.response.status === 500) {
          this.props.withRouter.history.push('/error');
        } else {
          console.log('Error deleting data', err);
        }
      });
  };

  // ownsCourse = () => {
  //   if (this.props.userId === this.props.context.id) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // redirect = e => {};

  // Only shows the UpdateCourse and DeleteCourse buttons if user isAuth and that user owns the course.
  render() {
    const { id } = this.props;
    const { isAuth } = this.props.context;
    const { ownsCourse } = this.props.context;
    // const ownsCourse = this.ownsCourse();

    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            <span>
              <NavLink
                component={<UpdateCourse />}
                to={{
                  pathname: `${id}/update`,
                  updateProps: {
                    ownsCourse: ownsCourse
                  }
                }}
                className="button"
              >
                Update Course
              </NavLink>
              <button className="button" onClick={this.deleteCourse}>
                Delete Course
              </button>
            </span>

            <NavLink className="button button-secondary" to="/">
              Return to List
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const ActionsBarMemo = React.memo(ActionsBar);
export default withAppContext(ActionsBarMemo);
