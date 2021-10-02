import {connect} from "react-redux";
import {cardsSelectors, createAddCard} from "../../store/cards";


const mapStateToProps = (state, {collectionId}) => ({
  cards: cardsSelectors.getCard(state, collectionId),
})

const mapDispatchToProps = (dispatch) => ({
  addCards: (card) => dispatch(createAddCard(card)),
})

export const cardsConnect = connect(mapStateToProps, mapDispatchToProps);