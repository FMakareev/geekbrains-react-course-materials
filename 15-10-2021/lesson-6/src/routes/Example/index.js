import {Form, Button} from 'react-bootstrap';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {createPost} from '../../stores/posts/actions'
import {EditPost} from './components/EditPost'
import {PostList} from "./components/PostList";

export const ExampleRender = ({createPost}) => {



  const onSave = (value) => {
    createPost({
      ...value,
      id: nanoid(),
    })
  }

  return (
    <div>
      <h1>Example</h1>
      <EditPost onSave={onSave}/>
      <PostList/>
    </div>
  );
};


const mapDispatchToProps = {
  createPost
}
// const mapDispatchToProps = (dispatch) => ({
//   createPost: (post) => dispatch(createPost(post)),
// })

export const Example = connect(undefined, mapDispatchToProps)(ExampleRender)
