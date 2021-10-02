

export const INCREMENT_SCORE_TO_PLAYER = 'INCREMENT_SCORE_TO_PLAYER';

export const INCREMENT_ACTIVE_QUESTION = 'INCREMENT_ACTIVE_QUESTION'; 
export const INCREMENT_ACTIVE_PLAYER = 'INCREMENT_ACTIVE_PLAYER'; 
export const START_GAME = 'START_GAME'; 
export const END_GAME = 'END_GAME'; 
export const SHOW_ANSWER = 'SHOW_ANSWER'; 
export const HIDE_ANSWER = 'HIDE_ANSWER';


export const createIncrementScoreToPlayer = (playerName) => ({
    type: INCREMENT_SCORE_TO_PLAYER,
    payload: playerName
})

export const createIncrementActiveQuestionIndex = (index) => ({
    type: INCREMENT_ACTIVE_QUESTION,
    payload: index
})

export const createIncrementActivePlayerIndex  = (index) => ({
    type: INCREMENT_ACTIVE_PLAYER,
    payload: index
})

export const createStartGame  = (gameState) => ({
    type: START_GAME,
    payload: gameState,
})

export const createEndGame  = () => ({
    type: END_GAME,
})

export const createShowAnswer  = () => ({
    type: SHOW_ANSWER,
})

export const createHideAnswer  = () => ({
    type: HIDE_ANSWER,
})