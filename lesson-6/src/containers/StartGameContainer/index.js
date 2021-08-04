import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

export const StartGameContainer = () => {
  return (
    <Button to='/game' component={Link}>
      start game
    </Button>
  );
};