import React, {useEffect, useRef, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";
import {Home} from "../Home";
import {Login} from "../Login";
import {SignUp} from "../SignUp";
import {Profile} from "../Profile";
import {Posts} from "../Posts";
import {CreatePost} from "../CreatePost";
import {Post} from "../Post";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, initAuthAction} from "../../store/user";
import {PrivateRoute} from "../../hocs/PrivateRoute";
import {PublicRoute} from "../../hocs/PublicRoute";
import {initPostsTracking} from "../../store/post/action";


export const Routes  = (props) => {


  const isAuth = useSelector(getIsAuth);
  const prevIsAuth = useRef(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isAuth, prevIsAuth.current);
    if (isAuth !== prevIsAuth.current) {
      dispatch(initPostsTracking)
    }
  }, [isAuth])

  useEffect(() => {
    dispatch(initAuthAction)
  }, [])


  return (
    <Switch>
      <PublicRoute auth={isAuth} exact path="/">
        <Home />
      </PublicRoute>
      <PublicRoute auth={isAuth} exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute auth={isAuth} exact path="/signup">
        <SignUp />
      </PublicRoute>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route path="/posts/:postId">
        <Post />
      </Route>
      <PrivateRoute auth={isAuth} exact path="/updatePost/:postId">
        <CreatePost />
      </PrivateRoute>
      <PrivateRoute auth={isAuth} exact path="/createPost">
        <CreatePost />
      </PrivateRoute>
      <PrivateRoute auth={isAuth} path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};