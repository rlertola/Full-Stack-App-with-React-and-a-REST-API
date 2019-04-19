import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class UpdateCourse extends Component {
  // Put onSubmit on the update course button and make function that gets the value from the inputs and updates them.

  // handleChange = e => {
  //   const updatedCourse = {
  //     ...this.props.course,
  //     [e.currentTarget.name]: e.currentTarget.value
  //   };
  //   this.props.updateCourse(updatedCourse, this.props.id);
  // };

  render() {
    return (
      <div>
        <hr />
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
            <form onSubmit={this.props.updateCourse}>
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
                      // value={this.props.course.title}
                      onChange={this.props.handleChange}
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
                      onChange={this.props.handleChange}
                    >
                      High-end furniture projects are great to dream about.
                    </textarea>
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
                          value="14 hours"
                          onChange={this.props.handleChange}
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
                          onChange={this.props.handleChange}
                        >
                          * 1/2 x 3/4 inch parting strip * 1 x 2 common pine * 1
                          x 4 common pine * 1 x 10 common pine * 1/4 inch thick
                          lauan plywood * Finishing Nails * Sandpaper * Wood
                          Glue * Wood Filler * Minwax Oil Based Polyurethane
                        </textarea>
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

export default UpdateCourse;
