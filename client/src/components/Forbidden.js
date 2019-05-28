import React from 'react';

// This component will render when user manually enters a url when they are not auth'd. The user sees the update and delete buttons only if they own the course.
const Forbidden = () => {
  return (
    <div className="bounds">
      <h1>Forbidden</h1>
      <p>
        Oh oh! You can't access this page because you don't own this course or
        you're not signed in.
      </p>
    </div>
  );
};

export default Forbidden;
