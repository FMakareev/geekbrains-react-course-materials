import {
    END_GAME,
    HIDE_ANSWER,
    INCREMENT_ACTIVE_PLAYER,
    INCREMENT_ACTIVE_QUESTION,
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

        case (INCREMENT_ACTIVE_QUESTION): {
            return {
                gameState: {
                    ...state.gameState,
                    activeQuestionIndex: action.payload,
                },
            }
        }

        case (INCREMENT_ACTIVE_PLAYER): {
            return {
                gameState: {
                    ...state.gameState,
                    activePlayerIndex: action.payload,
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