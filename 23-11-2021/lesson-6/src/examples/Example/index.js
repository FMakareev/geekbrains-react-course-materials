import {nanoid} from 'nanoid'
import {useDispatch} from "react-redux";
import {EditPost} from './components/EditPost'
import {PostList, PostListWithConnect} from "./components/PostList";
import {createPost} from "../../store/posts/actions";

export const Example = () => {

  const dispatch = useDispatch();

  const onSave = (value) => {
    dispatch(createPost({
      id:nanoid(),
      ...value
    }))
  }

  return (
    <div>
      <h1>Example</h1>
      <EditPost onSave={onSave}/>
      <PostListWithConnect/>
      {/*<PostList/>*/}
    </div>
  );
};

