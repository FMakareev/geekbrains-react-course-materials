import {postsAddItem, postsAddList, postsChange, postsRemove} from "../store/posts/actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {postsListSelector, postsSelector, tagsSelector} from "../store/posts/selectors";




const mapStateToProps = (state) => ({
  posts: postsSelector(state),
  postsList: postsListSelector(state),
  tags: tagsSelector(state),
})

const mapDispatchToProps = {
  postsAddItem,
  postsAddList,
  postsRemove,
  postsChange,
};

export const postsMapStateConnect = connect(mapStateToProps)

export const postsMapDispatchConnect = connect(null, mapDispatchToProps)

export const postsConnect = compose(postsMapStateConnect, postsMapDispatchConnect);
