import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {collectionsConnect} from "../../connects/collections";


export const CollectionListRender = ({collections, removeCollection}) => {
  return (
    <div>
      {
        collections.map(({title, id}) => <Link to={`/cards/${id}`} key={id}>
          <div>{title}</div>
          <button onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            removeCollection(id)
          }}>x</button>
        </Link>)
      }
    </div>
  );
};

CollectionListRender.propTypes = {
  collections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    title: propTypes.string,
  })),
  removeCollection: propTypes.func,
}

export const CollectionList = collectionsConnect(CollectionListRender)