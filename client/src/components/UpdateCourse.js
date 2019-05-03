import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { withAppContext } from './withAppContext';
import ValidationErrors from './ValidationErrors';

class UpdateCourse extends Component {
  state = {
    course: {},
    courseId: this.props.match.params.id,
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    user: this.props.context.state._id,
    emailAddress: this.props.context.state.emailAddress,
    password: this.props.context.state.password,
    name: '',
    errors: ''
  };

  componentDidMount() {
    this.getCourse();
  }

  getCourse = () => {
    axios
      .get(`http://localhost:5000/api/courses/${this.state.courseId}`)
      .then(response => {
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

  updateCourse = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/courses/${this.props.match.params.id}`,
        {
          user: this.state.user,
          title: this.state.title,
          description: this.state.description,
          estimatedTime: this.state.estimatedTime,
          materialsNeeded: this.state.materialsNeeded
        },
        {
          auth: {
            username: this.state.emailAddress,
            password: this.state.password
          }
        }
      )
      .then(response => {
        this.props.history.push(`/courses/${this.state.courseId}`);
      })
      .catch(err => {
        if (err.response.status === 400) {
          this.setState({
            errors: err.response.data.message
          });
        } else {
          console.log('Error fetching data', err);
        }
      });
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
            <ValidationErrors errors={this.state.errors} />
            <form onSubmit={this.updateCourse}>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input
                      className="input-title course--title--input"
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Course title..."
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                  </div>
                  <p>By {this.state.name}</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea
                      id="description"
                      name="description"
                      className=""
                      placeholder="Course description..."
                      onChange={this.handleChange}
                      value={this.state.description || ''}
                    />
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input
                          id="estimatedTime"
                          name="estimatedTime"
                          type="text"
                          className="course--time--input"
                          placeholder="Hours"
                          onChange={this.handleChange}
                          value={this.state.estimatedTime || ''}
                        />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea
                          id="materialsNeeded"
                          name="materialsNeeded"
                          className=""
                          placeholder="List materials..."
                          onChange={this.handleChange}
                          value={this.state.materialsNeeded || ''}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">
                  Update Course
                </button>
                <NavLink to={'/'} className="button button-secondary">
                  {' '}
                  Cancel
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAppContext(UpdateCourse);
