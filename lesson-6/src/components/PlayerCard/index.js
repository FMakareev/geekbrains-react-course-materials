import React from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export const PlayerCard = ({name, count, remove, selected}) => {
  return (
    <ListItem selected={selected}>
      <ListItemText primary={name}/>
      <ListItemText primary={`score: ${count || 0}`}/>
      {
        remove &&
        <ListItemSecondaryAction>
          <IconButton onClick={remove} edge="end" aria-label="delete">
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      }
    </ListItem>
  );
};