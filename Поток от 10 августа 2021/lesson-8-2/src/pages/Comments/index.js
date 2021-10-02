import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CommentList} from "../../components/CommentList";
import {useRequestApi} from "../../hooks/useRequestApi";
import {ENDPOINT, ENDPOINTS} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {commentsSelectors, getCommentsAction} from "../../store/comments";


export const Comments = (props) => {
  const {postId} = useParams();

  const comments = useSelector(commentsSelectors.getCommentsData)
  const error = useSelector(commentsSelectors.getCommentsError)
  const isLoading = useSelector(commentsSelectors.getCommentsLoading)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getCommentsAction(postId));
  }, [])

  // const url = [
  //   ENDPOINT,
  //   ENDPOINTS.comments.replace(
  //     ':postId',
  //     postId
  //   )
  // ].join('');
  //
  // const [commentsApi] = useRequestApi({
  //   url,
  //   isAutoLoad: true,
  // })


  /**
   * @desc наивный вариант работы с запросами в компонентах
   * */
  // const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [data, setData] = useState([]);
  //
  // const getComments = async () => {
  //
  //   try {
  //     setError(undefined);
  //     setLoading(true)
  //
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  //
  //     const result = await response.json();
  //
  //     setData(result);
  //
  //   } catch (e) {
  //     setError(e);
  //     console.dir(e);
  //   }
  //
  //   setLoading(false);
  // }
  //
  // useEffect(() => {
  //   getComments();
  // }, [])

  return (
    <div>
      <h1>comments</h1>
      postId: {postId}

      {
        isLoading && <div>
          isLoading: {isLoading.toString()}
        </div>
      }

      {
        error && <div>
          error: {error.toString()}
        </div>
      }
      {
        comments &&
        <CommentList comments={comments}/>
      }
    </div>
  );
};