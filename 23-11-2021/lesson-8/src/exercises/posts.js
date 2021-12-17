import {postsReducer} from "../store/posts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Loader} from "../components/Loader";
import {Error} from "../components/Error";

export const PostsPage = () => {
  const data = useSelector(postsReducer.selectors.getData)
  const error = useSelector(postsReducer.selectors.getError)
  const loading = useSelector(postsReducer.selectors.getLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsReducer.actions.getDataWithThunk);
  }, [])

  return <div>
    {
      error &&
      <Error/>
    }
    {
      loading &&
      <Loader/>
    }

    <ul>
      {
        data.length > 0 && data.map((item) => (<li key={item.id}>
          <h4>
            {item.title}
          </h4>
          <p>
            {item.body}
          </p>
        </li>))
      }
    </ul>
  </div>
}
