import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({auth, ...rest}) {
  return auth ? <Route {...rest}/> : <Redirect to={{
    pathname: '/login',
  }}/>
}