import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";
import {Home} from "../Home";
import {Login} from "../Login";
import {SignUp} from "../SignUp";
import {Profile} from "../Profile";
import {Posts} from "../Posts";
import {CreatePost} from "../CreatePost";
import {Post} from "../Post";
import {PublicRoute} from "../../hocs/PublicRoute";
import {PrivateRoute} from "../../hocs/PrivateRoute";

export const Routes  = (props) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })

  }, [])

  return (
    <Switch>
      <PublicRoute auth={auth} exact path="/">
        <Home />
      </PublicRoute>
      <PublicRoute auth={auth} exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute auth={auth} exact path="/signup">
        <SignUp />
      </PublicRoute>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route path="/posts/:postId">
        <Post />
      </Route>
      <PrivateRoute auth={auth} exact path="/createPost">
        <CreatePost />
      </PrivateRoute>
      <PrivateRoute auth={auth} path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};