import React from 'react';
import {Container} from '@material-ui/core';

export const Layout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
