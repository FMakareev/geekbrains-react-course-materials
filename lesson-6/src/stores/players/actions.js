
export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const INCREMENT_SCORE_TO_PLAYER = 'INCREMENT_SCORE_TO_PLAYER';


export const createAddPlayer = (player) => ({
    type: ADD_PLAYER,
    payload:player
})


export const createRemovePlayer = (playerName) => ({
    type: REMOVE_PLAYER,
    payload: playerName
})

export const createIncrementScoreToPlayer = (playerName) => ({
    type: INCREMENT_SCORE_TO_PLAYER,
    payload: playerName
})