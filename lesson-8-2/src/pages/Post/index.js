import React, {useEffect, useState} from 'react';
import {useParams, Redirect, Link} from "react-router-dom";
import {ENDPOINT, ENDPOINTS} from "../../api";


export const Post = (props) => {
  const {postId} = useParams();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState({});

  const url = [
    ENDPOINT,
    ENDPOINTS.postById.replace(
      ':postId',
      postId
    )
  ].join('');

  const getPost = async () => {

    try {
      setError(undefined);
      setLoading(true)

      const response = await fetch(url)

      const result = await response.json();

      setData(result);

    } catch (e) {
      setError(e);
      console.dir(e);
    }

    setLoading(false);
  }


  useEffect(() => {
    getPost();
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>{error.toString()}</div>
  }

  if (!data) {
    return <div>empty data</div>
  }

  if (!postId) {
    return <Redirect to="/"/>
  }

  return (
    <div>
      <h5>userId: {data.userId}</h5>
      <h4>{data.title}</h4>
      <p>{data.body}</p>
      <Link to={`/comments/${data.id}`}>
        open post
      </Link>
    </div>
  );
};