import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getPosts} from "../../store/post/selectors";


export const Posts = () => {
  const posts = useSelector(getPosts);

  return (
    <ul>
      {
        posts.map(({id, title}) => <li>
          <Link to={`/posts/${id}`}>
            {title}
          </Link>
        </li>)
      }
    </ul>
  );
};