import React, {useState, useEffect, useMemo} from 'react';
import {PostList} from "../../components/PostList";
import {useRequestApi} from "../../hooks/useRequestApi";
import {ENDPOINT, ENDPOINTS} from "../../api";




export const Home = (props) => {
  /**
   * @desc наивный вариант работы с запросами в компонентах
   * */
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [data, setDate] = useState([]);
  // const getPosts = async () => {
  //   try {
  //     setError(null);
  //     setLoading(true);
  //
  //     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  //
  //     const posts = await data.json();
  //
  //     setDate(posts);
  //
  //   } catch (e) {
  //     console.dir(e);
  //     setError(e);
  //   }
  //
  //   setLoading(false);
  // }
  //
  // useEffect(() => {
  //
  //   getPosts()
  //
  // }, [])


  /**
   * @desc формируем строку API которое хотим вызвать
   * */
  const url = useMemo(() =>[
    ENDPOINT,
    ENDPOINTS.posts
  ].join(''), []);

  /**
   * @desc более приятный и удобный способ работы с API
   * решает проблему дублирования кода
   * */
  const [postApi, getPosts] = useRequestApi({
    url,
    isAutoLoad: true,
  })


  return (
    <div>
      <h1>posts</h1>
      <button onClick={getPosts}>reload</button>

      {
        postApi.isLoading && <div>isLoading: {postApi.isLoading}</div>
      }
      {
        postApi.error && <div>
          error: {postApi.error.toString()}
        </div>
      }
      {
        postApi.data &&
        <PostList posts={postApi.data}/>
      }
    </div>
  );
};