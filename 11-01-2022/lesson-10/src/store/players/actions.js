import {playersApi} from "../../api/request/players";
import {getPlayersSelector} from "./selectors";

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';



export const createAddPlayer = (player) => ({
    type: ADD_PLAYER,
    payload: player
})


export const createRemovePlayer = (playerName) => ({
    type: REMOVE_PLAYER,
    payload: playerName
})



export const sendPlayerAction = () => async (dispatch, getState) => {

    await playersApi.sendPlayers([]);

}
