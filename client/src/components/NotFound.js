import React from 'react';

// When a bad url is entered, or when a course id doesn't exist.
const NotFound = () => {
  return (
    <div className="bounds">
      <h1>Not Found</h1>
      <p>Sorry! We couldn't find the page you're looking for.</p>
    </div>
  );
};

export default NotFound;
