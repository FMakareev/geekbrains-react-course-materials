
export const ADD_CARD = 'ADD_CARD';


/**
 * @param {object} card
 * @param {string} card.id
 * @param {string} card.content
 * @param {string} card.collectionId
 * */
export const createAddCard = (card) => ({
  type: ADD_CARD,
  payload: card
})