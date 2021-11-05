import { Link } from "react-router-dom";
import { MOCK_POSTS } from "./helpers/mock";

export const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {MOCK_POSTS.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
