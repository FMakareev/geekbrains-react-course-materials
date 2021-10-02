import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getPosts} from "../../store/post/selectors";
import {postsApi} from "../../api";


export const Posts = () => {
  const posts = useSelector(getPosts);

  return (
    <ul>
      {
        posts.map(({id, title}) => <li>
          <Link to={`/posts/${id}`}>
            {title}
            <button onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              postsApi.delete(id);
            }}>delete</button>
          </Link>
        </li>)
      }
    </ul>
  );
};