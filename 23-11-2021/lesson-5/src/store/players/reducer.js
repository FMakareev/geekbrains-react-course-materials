import {ADD_PLAYER, NEXT_PLAYER, REMOVE_PLAYER} from "./actions";

const initialState = {
  players: [],
  currentPlayer: 0,
}


export const playersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PLAYER: {
      return  {
        ...state,
        players: [
          ...state.players,
          action.payload,
        ]
      }
    }
    case REMOVE_PLAYER: {
      return {
        ...state,
        players: state.players.filter((item) => item !== action.payload)
      }
    }
    case NEXT_PLAYER: {
      const {currentPlayer, players} = state;

      if (players.length - 1 === currentPlayer) {
        return  {
          players,
          currentPlayer: 0
        }
      }
      return  {
        players,
        currentPlayer: currentPlayer + 1,
      }

    }
    default: {
      return state;
    }

  }

}
