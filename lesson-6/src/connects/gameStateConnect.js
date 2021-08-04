import {connect} from "react-redux";
import {
  createEndGame, createHideAnswer, createIncrementActivePlayerIndex,
  createIncrementActiveQuestionIndex, createShowAnswer,
  createStartGame,
  gameStateSelector
} from "../stores/gameState";



const mapStateToProps = (state) => ({
  activeQuestion: gameStateSelector.getActiveQuestion(state),
  getActivePlayer: gameStateSelector.getActivePlayer(state),
  activeQuestionIndex: gameStateSelector.getActiveQuestionIndex(state),
  activePlayerIndex: gameStateSelector.getActivePlayerIndex(state),
  isShowAnswer: gameStateSelector.getShowAnswerStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveQuestionIndex: (index) => dispatch(createIncrementActiveQuestionIndex(index)),
  setActivePlayerIndex: (index) => dispatch(createIncrementActivePlayerIndex(index)),
  startGame: (gameState) => dispatch(createStartGame(gameState)),
  endGame: () => dispatch(createEndGame()),
  showAnswer: () => dispatch(createShowAnswer()),
  hideAnswer: () => dispatch(createHideAnswer()),
});


export const gameStateConnect = connect(mapStateToProps, mapDispatchToProps)