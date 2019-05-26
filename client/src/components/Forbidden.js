import React from 'react';

// Instead of using this component I have set it up so that the user sees the update and delete buttons if they own the course, or it goes to the notfound route if a non-existent course is requested. If an unauthorized user tries to enter a link to update a course manually, they will be taken straight to the signin page.
const Forbidden = () => {
  console.log('rendered');
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
