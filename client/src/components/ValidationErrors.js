import React, { Component } from 'react';

// Displays if user does not enter a title or description in Create or UpdateCourse.
class ValidationErrors extends Component {
  render() {
    const errorMessages = this.props.errors;
    if (errorMessages) {
      return (
        <div>
          <h2 className="validation--errors--label">Validation errors</h2>
          <div className="validation-errors">
            <ul>
              {errorMessages.map((msg, i) => {
                return <li key={i}>- {msg}</li>;
              })}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ValidationErrors;
