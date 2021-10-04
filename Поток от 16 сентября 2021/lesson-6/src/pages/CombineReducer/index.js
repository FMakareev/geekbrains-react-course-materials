import React from 'react';
import {profileReducer} from "../../store/profile/reducer";
import {postsReducer} from "../../store/posts/reducer";
import {profileToggleActive} from "../../store/profile/actions";



const combineReducers = (reducers) => {

  return (state = {}, action) => {
    const newState = {}

    for (const reducerName in reducers) {

      const reducer = reducers[reducerName];
      const prevReducerState = state[reducerName];
      const nextReducerState = reducer(prevReducerState, action);

      newState[reducerName] = nextReducerState;
    }

    return newState;
  }

}


const allReducers = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
})
console.log(allReducers);

console.log(allReducers());
console.log(allReducers({}, profileToggleActive()));

export const CombineReducer = (props) => {
  return (
    <div>
      CombineReducer
    </div>
  );
};
