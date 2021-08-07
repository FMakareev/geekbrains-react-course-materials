import {ADD_PLAYER, REMOVE_PLAYER} from "./actions";


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

        default: {
            return state;
        }
    }
}