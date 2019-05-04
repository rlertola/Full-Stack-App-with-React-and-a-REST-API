import React from 'react';

// This component is essentially useless as I have set it up so that the user sees the update and delete buttons if they own the course, or it goes to the notfound route if a non-existent course is requested.
const Forbidden = () => {
  return (
    <div className="bounds">
      <h1>Forbidden</h1>
      <p>Oh oh! You can't access this page. Please sign in.</p>
    </div>
  );
};

export default Forbidden;
