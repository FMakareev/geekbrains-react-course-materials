
import {connect} from 'react-redux';
import {createAddPlayer, createRemovePlayer, getPlayersSelector} from "../stores/players";

const mapStateToProps = (state) => {
    return {
        players: getPlayersSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (player) => dispatch(createAddPlayer(player)),
        removePlayer: (playerName) => dispatch(createRemovePlayer(playerName)),
    }
}


export const playersConnect = connect(mapStateToProps, mapDispatchToProps);