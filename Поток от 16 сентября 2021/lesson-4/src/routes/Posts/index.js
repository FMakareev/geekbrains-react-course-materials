import React from 'react';
import {Link} from 'react-router-dom';
import {MOCK_POSTS} from "./mock";
import {getPostsByIdPath} from "../../navigation";




export const Posts = (props) => {

  return (
    <ul>
      {
        MOCK_POSTS.map(({title, id}) => <li>
          <Link to={getPostsByIdPath(id)}>
            {title}
          </Link>
        </li>)
      }
    </ul>
  );
};
