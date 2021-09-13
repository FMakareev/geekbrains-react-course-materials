import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAddPlayer, getPlayersSelector, sendPlayerAction} from "../../store/players";
import {createPlayer} from "../../entities/Player";


export const ReduxTestExampleTestIds = {
  sendPlayerButton: 'ReduxTestExampleTestIds_sendPlayerButton',
  addPlayerButton: 'ReduxTestExampleTestIds_addPlayerButton',
  playerList: 'ReduxTestExampleTestIds_playerList',
  playerName: 'ReduxTestExampleTestIds_playerName',
}

const PlayerView = ({name}) => {
  return <div data-testid={ReduxTestExampleTestIds.playerName}>{name}</div>
}

export const ReduxTestExample = () => {

  const players = useSelector(getPlayersSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(sendPlayerAction())
        }}
        data-testid={ReduxTestExampleTestIds.sendPlayerButton}
      >
        send players
      </button>
      <button
        onClick={() => {
          dispatch(createAddPlayer(createPlayer(Date.now().toString())))
        }}
        data-testid={ReduxTestExampleTestIds.addPlayerButton}
      >
        add player
      </button>
      <div data-testid={ReduxTestExampleTestIds.playerList}>
        {
          players.map(({name}) => <PlayerView key={name} name={name}/>)
        }
      </div>
    </div>
  );
};