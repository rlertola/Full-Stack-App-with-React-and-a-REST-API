import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import ValidationErrors from './ValidationErrors';
import { withAppContext } from './withAppContext';

class CreateCourse extends Component {
  state = {
    title: null,
    description: null,
    estimatedTime: null,
    materialsNeeded: null,
    errors: null
  };

  createCourse = e => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/api/courses`,
        {
          user: this.props.context.id,
          title: this.state.title,
          description: this.state.description,
          estimatedTime: this.state.estimatedTime,
          materialsNeeded: this.state.materialsNeeded
        },
        {
          auth: {
            username: this.props.context.state.emailAddress,
            password: this.props.context.state.password
          }
        }
      )
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        if (err.response.status === 400) {
          const errors = err.response.data.message;
          const messages = Object.values(errors).map(err => {
            return err.message;
          });

          this.setState({
            errors: messages
          });
        } else {
          console.log('Error fetching data', err);
        }
      });
  };

  // Updates as user types in inputs.
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  // Displays ValidationErrors if title or description are empty.
  render() {
    const { errors } = this.state;

    return (
      <div>
        <hr />
        <div className="bounds course--detail">
          <h1>Create Course</h1>
          <div>
            <ValidationErrors errors={errors} />
            <form onSubmit={this.createCourse}>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="input-title course--title--input"
                      placeholder="Course title..."
                      onChange={this.handleChange}
                    />
                  </div>

                  <p />
                </div>
                <div className="course--description">
                  <div>
                    <textarea
                      id="description"
                      name="description"
                      className=""
                      placeholder="Course description..."
                      onChange={this.handleChange}
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
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">
                  Create Course
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

export default withAppContext(CreateCourse);
