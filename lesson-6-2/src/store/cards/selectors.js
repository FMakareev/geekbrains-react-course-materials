

const getCards = (state) => state.cards.cards || {};

const getCard = (state, collectionId) => getCards(state)[collectionId];

export const cardsSelectors = {
  getCards,
  getCard
}