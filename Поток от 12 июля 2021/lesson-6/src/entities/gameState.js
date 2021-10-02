

export const createGameState = ({questions, players}) => {
    return {
        activeQuestionIndex: 0,
        activePlayerIndex: 0,
        isShowAnswer: false,
        questions,
        players,
        id: Date.now(),
    }
}