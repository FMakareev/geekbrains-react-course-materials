import {
    END_GAME,
    HIDE_ANSWER,
    INCREMENT_ACTIVE_PLAYER,
    INCREMENT_ACTIVE_QUESTION,
    INCREMENT_SCORE_TO_PLAYER,
    SHOW_ANSWER,
    START_GAME
} from "./actions";

export const initialState = {
    gameState: undefined,
}

export const gameStateReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case (START_GAME): {
            return {
                gameState: action.payload,
            }
        }
        case INCREMENT_SCORE_TO_PLAYER: {
            const currentPlayerIndex = state.gameState.players.findIndex((player) => player.name !== action.payload);
            const currentPlayer = state.gameState.players[currentPlayerIndex]
            const newCurrentPlayer = {
                ...currentPlayer,
                count: currentPlayer + 1,
            }

            const newPlayers = [
                ...state.gameState.players,
            ]

            newPlayers[currentPlayerIndex] = newCurrentPlayer;

            return {
                gameState: {
                    ...state.gameState,
                    players: newPlayers
                }
            }
        }

        case (INCREMENT_ACTIVE_QUESTION): {
            return {
                gameState: {
                    ...state.gameState,
                    activeQuestionIndex: state.gameState.activeQuestionIndex + 1,
                },
            }
        }

        case (INCREMENT_ACTIVE_PLAYER): {
            let activePlayerIndex = state.gameState.activePlayerIndex

            if (activePlayerIndex === state.gameState.players.length - 1) {
                activePlayerIndex = 0;
            } else {
                activePlayerIndex += 1;
            }

            return {
                gameState: {
                    ...state.gameState,
                    activePlayerIndex,
                },
            }
        }

        case (SHOW_ANSWER): {
            return {
                gameState: {
                    ...state.gameState,
                    isShowAnswer: true,
                },
            }
        }

        case (HIDE_ANSWER): {
            return {
                gameState: {
                    ...state.gameState,
                    isShowAnswer: false,
                },
            }
        }

        case (END_GAME): {
            return initialState
        }
        default: {
            return state;
        }
    }
    
}