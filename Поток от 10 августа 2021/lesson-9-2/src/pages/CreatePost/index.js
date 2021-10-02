import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {postsApi} from "../../api";
import {useSelector} from "react-redux";
import {getPostById} from "../../store/post/selectors";


export const CreatePost = () => {
  const {push} = useHistory();
  const {postId} = useParams();

  const [isUpdate] = useState(!!postId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const post = useSelector(getPostById(postId));

  useEffect(() => {

    if (postId && post) {
      setTitle(post.title)
      setContent(post.content)
    }

  }, [])

  const handlePassChange = (e) => {
    setContent(e.target.value);
  };

  const handleEmailChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (postId) {
        await postsApi.update(postId, title, content)
      } else {
        await postsApi.create(title, content)
      }
      push('/posts')

    } catch (e) {
      setError(e);
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="title"
            name="title"
            type="title"
            onChange={handleEmailChange}
            value={title}
          />
        </div>
        <div>
          <textarea
            placeholder="content"
            name="content"
            onChange={handlePassChange}
            value={content}
          />
        </div>
        <div>
          {error && <p>{error.toString()}</p>}
          <button type="submit">
            {
              isUpdate && <>update</>
            }
            {
              !isUpdate && <>create</>
            }
          </button>
        </div>
      </form>
    </div>
  );
};