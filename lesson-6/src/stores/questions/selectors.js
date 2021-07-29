
export const getQuestionsListSelector = (state) => state.questions.questions || [];

export const getQuestionSelector = (questionId) => (state) => getQuestionsListSelector(state).find((question) => question.id === questionId);
