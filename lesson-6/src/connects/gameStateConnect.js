import {connect} from "react-redux";
import {
  createEndGame, createHideAnswer, createIncrementActivePlayerIndex,
  createIncrementActiveQuestionIndex, createIncrementScoreToPlayer, createShowAnswer,
  createStartGame,
  gameStateSelector, getPlayers,
} from "../stores/gameState";



const mapStateToProps = (state) => ({
  players: gameStateSelector.getPlayers(state),
  activeQuestion: gameStateSelector.getActiveQuestion(state),
  activePlayer: gameStateSelector.getActivePlayer(state),
  activeQuestionIndex: gameStateSelector.getActiveQuestionIndex(state),
  activePlayerIndex: gameStateSelector.getActivePlayerIndex(state),
  isShowAnswer: gameStateSelector.getShowAnswerStatus(state),
  correctAnswer: gameStateSelector.getCorrectAnswerSelector(state),
  incorrectAnswer: gameStateSelector.getIncorrectAnswerSelector(state),
  allAnswers: gameStateSelector.getAllAnswerForQuestionSelector(state)

});

const mapDispatchToProps = (dispatch) => ({
  setActiveQuestionIndex: (index) => dispatch(createIncrementActiveQuestionIndex(index)),
  setActivePlayerIndex: (index) => dispatch(createIncrementActivePlayerIndex(index)),
  startGame: (gameState) => dispatch(createStartGame(gameState)),
  incrementScoreToPlayer: (playerName) => dispatch(createIncrementScoreToPlayer(playerName)),
  endGame: () => dispatch(createEndGame()),
  showAnswer: () => dispatch(createShowAnswer()),
  hideAnswer: () => dispatch(createHideAnswer()),
});


export const gameStateConnect = connect(mapStateToProps, mapDispatchToProps)