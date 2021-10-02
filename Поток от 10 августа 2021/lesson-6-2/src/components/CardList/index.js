import React from 'react';
import propTypes from "prop-types";
import {cardsConnect} from "../../connects/cards";


export const CardListRender = ({cards, ...rest}) => {
  console.log(cards, rest);
  return (
    <div>
      {
        cards?.map(({content, id}) => <li key={id}>{content}</li>)
      }
    </div>
  );
};


CardListRender.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    collectionId: propTypes.string,
    content: propTypes.string,
  }))
}

export const CardList = cardsConnect(CardListRender);