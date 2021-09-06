import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to='/'>Return to main page?</Link>
    </div>
  );
};

export default NotFound;
