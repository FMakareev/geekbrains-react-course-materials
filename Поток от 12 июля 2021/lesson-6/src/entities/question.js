

/**
 * @param question {string}
 * @param correct_answer {string}
 * @param incorrect_answers {string[]}
 * */
export const createQuestion = (question, correct_answer, incorrect_answers) => ({
    question, correct_answer, incorrect_answers
})