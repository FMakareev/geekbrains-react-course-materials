import {Container, Row, Col} from 'react-bootstrap'
import {PostCard} from "./PostCard";
import {connect, useSelector} from "react-redux";
import {getPosts} from "../../../store/posts/selectors";
import {deletePost} from "../../../store/posts/actions";

export const PostList = ({deletePost, posts}) => {
  // const posts = useSelector(getPosts)
  // const posts = useSelector((state) => state.posts.posts)

  return (<Container>
    <Row>
      {
        posts?.map((item) => <Col key={item.id}>
          <PostCard
            onDelete={() => {
              deletePost(item.id);
            }}
            {...item}
          />
        </Col>)
      }
    </Row>
  </Container>)
}


const mapStateToProps = (state, props) => {
  return {
    posts: getPosts(state),
  }
}

const mapDispatchToProps = {
  deletePost
}

// const mapDispatchToProps = (dispatch, props) => ({
//   deletePost: (postId) => dispatch(deletePost(postId))
// })


export const PostListWithConnect = connect(mapStateToProps, mapDispatchToProps)(PostList)
