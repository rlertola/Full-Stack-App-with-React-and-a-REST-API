import React, { Component } from 'react';

class ValidationErrors extends Component {
  render() {
    const errorMessages = this.props.errors;
    console.log(this.props.errors);
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
      return '';
    }
  }
}

export default ValidationErrors;
