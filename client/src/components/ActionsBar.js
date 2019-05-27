import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import UpdateCourse from './UpdateCourse';
import { AuthConsumer } from './AuthContext';
import { withAppContext } from './withAppContext';

class ActionsBar extends Component {
  // Redirects to the courses page after deletion.
  deleteCourse = e => {
    e.preventDefault();
    const { emailAddress, password } = this.props.context.state;

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

  // Only shows the UpdateCourse and DeleteCourse buttons if user isAuth and that user owns the course.
  render() {
    const { id } = this.props;

    return (
      <AuthConsumer>
        {({ isAuth, ownsCourse }) => (
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100">
                {isAuth && ownsCourse ? (
                  <span>
                    <NavLink
                      // component={<UpdateCourse />}
                      to={`${id}/update`}
                      // to={{
                      //   pathname: `${id}/update`,
                      //   updateProps: {
                      //     ownsCourse: ownsCourse
                      //   }
                      // }}
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

const ActionsBarMemo = React.memo(ActionsBar);
export default withAppContext(ActionsBarMemo);
