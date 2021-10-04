import React from 'react';
import {useSelector} from 'react-redux';
import {postsConnect} from "../../connects/postsConnect";
import {postsListSelector, postsSelector, tagsSelector} from "../../store/posts/selectors";





export const ExampleRender = (props) => {

 const posts = useSelector(postsSelector)
 const postsList = useSelector(postsListSelector)
 const postsTags = useSelector(tagsSelector)

  console.log('posts: ', posts);
  console.log('postsList: ', postsList);
  console.log('postsTags: ', postsTags);
  console.log(props);
  return (
    <div>
      Example
      <button onClick={() => {
        props.postsAddItem({
          id: Date.now(),
          title: 'title',
        })
      }}>
        postsAddItem
      </button>

      {
        props.postsList.map(({id, title}) => <div key={id}>
          {id}: {title}
          <button onClick={() => {
            props.postsRemove(id)
          }}>x</button>
        </div>)
      }
    </div>
  );
};


export const Example = postsConnect(ExampleRender);
