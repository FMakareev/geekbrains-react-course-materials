import {ADD_CARD} from "./actions";


const initialState = {
  cards: {},
}

/**
 * @param {object} state
 * @param {object} state.cards
 *
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {string} action.payload.id
 * @param {string} action.payload.collectionId
 * @param {string} action.payload.content
 * */
export const cardReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_CARD: {
      const {collectionId} = action.payload;

      if (state.cards.hasOwnProperty(collectionId)) {
        state.cards[collectionId] = [
          ...state.cards[collectionId],
          action.payload,
        ]
      } else {
        state.cards[collectionId] = [action.payload];
      }

      return  {
        cards: {
          ...state.cards,
        }
      }
    }
    default: {
      return state;
    }
  }

}