import React from 'react';

import {Route, Redirect} from 'react-router-dom'

export function PublicRoute({auth, ...rest}) {
  return !auth ? <Route {...rest}/> : <Redirect to={{
    pathname: '/posts',
  }}/>
}