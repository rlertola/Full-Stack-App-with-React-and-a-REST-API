import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ValidationErrors from './ValidationErrors';
import axios from 'axios';

class CreateCourse extends Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    user: ''

    // add user
  };

  createCourse = e => {
    e.preventDefault();
    console.log('called');
    axios
      .post(`http://localhost:5000/api/courses`, {
        title: this.state.title,
        description: this.state.title,
        estimatedTime: this.state.title,
        materialsNeeded: this.state.title
      })
      // push history to courses page
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log('Error fetching data', err);
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
          <h1>Create Course</h1>
          <div>
            <ValidationErrors />
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
                      value={this.state.title}
                    />
                  </div>

                  <p>By Joe Smith</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea
                      id="description"
                      name="description"
                      className=""
                      placeholder="Course description..."
                      onChange={this.handleChange}
                      value={this.state.description}
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
                          value={this.state.estimatedTime}
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
                          value={this.state.materialsNeeded}
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

export default CreateCourse;
