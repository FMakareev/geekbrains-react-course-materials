import React from 'react';
import {useHistory} from "react-router-dom";



export const Profile = () => {
  const {goBack, push} = useHistory();

  return (
    <div>
      Profile
      <button onClick={goBack}>
        go back
      </button>
      <button onClick={() => push('/posts')}>
        go to posts
      </button>
    </div>
  );
};