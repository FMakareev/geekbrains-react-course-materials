import React from 'react';



export const ListGroup = (props) => {

  return <ul className="list-group">
    {props.children}
  </ul>
}