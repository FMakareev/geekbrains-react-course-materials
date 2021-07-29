

export const createGameState = (players, questions) => {
    return {
        players,
        questions,
        activeQuestionIndex: 0,
        activePlayerIndex: 0,
        isShowAnswer: false,
    }
}