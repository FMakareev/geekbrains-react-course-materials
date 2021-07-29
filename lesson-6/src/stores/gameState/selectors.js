export const getGameState = (state) => state.gameState.gameState;

export const getPlayers = (state) => getGameState(state).players || [];

export const getQuestions = (state) => getGameState(state).questions || [];

export const getActiveQuestionIndex = (state) => getGameState(state).activeQuestionIndex;

export const getActivePlayerIndex = (state) => getGameState(state).activePlayerIndex;

export const getActiveQuestion = (state) => {
    const activeQuestionIndex = getActiveQuestionIndex(state);
    const questions = getQuestions(state);

    return questions[activeQuestionIndex];
}

export const getActivePlayer = (state) => {
    const activePlayerIndex = getActivePlayerIndex(state);
    const players = getPlayers(state);

    return players[activePlayerIndex];
}

export const getShowAnswerStatus = (state) => getGameState(state).isShowAnswer;


export const gameStateSelector = {
    getGameState,
    getPlayers,
    getQuestions,
    getActiveQuestionIndex,
    getActivePlayerIndex,
    getActiveQuestion,
    getActivePlayer,
    getShowAnswerStatus
}