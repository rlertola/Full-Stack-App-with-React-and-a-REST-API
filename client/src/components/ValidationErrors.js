import React, { Component } from 'react';

class ValidationErrors extends Component {
  render() {
    return (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            <li>{this.props.error}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ValidationErrors;
