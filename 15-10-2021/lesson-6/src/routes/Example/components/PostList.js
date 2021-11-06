import {Container, Row, Col} from 'react-bootstrap'
import {connect, useSelector} from 'react-redux';
import {PostCard} from "./PostCard";
import {deletePost} from "../../../stores/posts/actions";
import {getPosts, getPostsIsLoading, getRootPosts, getPostsError, getPostsTags} from "../../../stores/posts/selectors";

export const PostListRender = ({list, deletePost}) => {

  const isLoading = useSelector(getPostsIsLoading)
  const posts = useSelector(getRootPosts)
  const error = useSelector(getPostsError)
  const tags = useSelector(getPostsTags)

  return (<Container>
    <Row>
      {
        list.map((item) => <Col key={item.id}>
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

const mapStateToProps = (state) => ({
  list: getPosts(state)
})


const mapDispatchToProps = {
  deletePost
}


export const PostList = connect(mapStateToProps, mapDispatchToProps)(PostListRender);
