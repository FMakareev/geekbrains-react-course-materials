import React from 'react';
import { Link } from 'react-router-dom';


export const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/">
        go to home
      </Link>
    </div>
  );
};
