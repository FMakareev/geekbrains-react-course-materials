import React from 'react';


export const ListGroupItem = (props) => {

  const classes = [
    "list-group-item",
    (props.active ? 'active' : ''),
    (props.disabled ? 'disabled' : ''),
  ].join(' ');

  return React.createElement(props.tag || 'li', {
    className: classes,
  }, props.children)
}