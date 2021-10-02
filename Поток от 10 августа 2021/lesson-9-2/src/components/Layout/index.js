import React from 'react';
import {Link} from "react-router-dom";
import {userApi} from "../../api/request/user";


export const Layout = ({children}) => {

  return (
    <div>
      <ul style={{
        display: 'grid',
        gap: 40,
        gridTemplateColumns: 'repeat(5, min-content)',
      }}>
        <li>
          <Link to="/posts">posts</Link>
        </li>
        <li>
          <Link to="/createPost">createPost</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button onClick={userApi.logout}>logout</button>
        </li>
      </ul>
      <div style={{
        display: 'grid',
        gap: 20,
        gridTemplateColumns: '200px auto',
      }}>
        {children}
      </div>
    </div>
  );
};