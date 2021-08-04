import {connect} from "react-redux";
import {createActionLoadingQuestions, getQuestionLoadingStatusSelector} from "../stores/questions";


const mapStateToProps = (state) => ({
  isLoadingQuestions: getQuestionLoadingStatusSelector(state),

})

const mapDispatchToProps = (dispatch) => ({
  loadingQuestions: () =>dispatch(createActionLoadingQuestions()),
})


export const questionsConnect = connect(mapStateToProps, mapDispatchToProps)