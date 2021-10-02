import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {postsApi} from "../../api";


export const CreatePost = (props) => {
  const {push} = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setContent(e.target.value);
  };

  const handleEmailChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postsApi.createPost(title, content);
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
          {error && <p>{error}</p>}
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  );
};