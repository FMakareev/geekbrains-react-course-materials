import {connect} from "react-redux";
import {
  createActionLoadingQuestions,
  questionsSelectors
} from "../stores/questions";


const mapStateToProps = (state) => ({
  isLoadingQuestions: questionsSelectors.getQuestionLoadingStatusSelector(state),
  questions: questionsSelectors.getQuestionsListSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  loadingQuestions: () =>dispatch(createActionLoadingQuestions()),
})


export const questionsConnect = connect(mapStateToProps, mapDispatchToProps)