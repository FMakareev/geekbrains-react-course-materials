import {ADD_PLAYER, INCREMENT_SCORE_TO_PLAYER, REMOVE_PLAYER} from "./actions";


export const initialState = {
    players: []
}

export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER: {
            return {
                players: [
                    ...state.players,
                    action.payload,
                ]
            }
        }
        case REMOVE_PLAYER: {
            return {
                players: [
                    ...state.players.filter((player) => player.name !== action.payload),
                ]
            }
        }
        case INCREMENT_SCORE_TO_PLAYER: {
            const currentPlayerIndex = state.players.findIndex((player) => player.name !== action.payload);
            const currentPlayer = state.players[currentPlayerIndex]
            const newCurrentPlayer = {
                ...currentPlayer,
                count: currentPlayer + 1,
            }

            const newPlayers = [
                ...state.players,
            ]

            newPlayers[currentPlayerIndex] = newCurrentPlayer;

            return {
                players: newPlayers
            }
        }
        default: {
            return state;
        }
    }
}