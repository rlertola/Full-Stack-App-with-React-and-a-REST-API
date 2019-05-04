import React from 'react';

// This has also been rendered useless since my errors are handled with hiding the update and delete buttons, and showing the Not Found when a bad url is entered.
const UnhandledError = () => {
  return (
    <div className="bounds">
      <h1>Error</h1>
      <p>Sorry! We just encountered an unexpected error.</p>
    </div>
  );
};

export default UnhandledError;
