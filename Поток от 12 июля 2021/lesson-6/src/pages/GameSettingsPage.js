import React from 'react';
import {EditPlayersContainer} from '../containers/EditPlayersContainer';
import {StartGameContainer} from "../containers/StartGameContainer";


export const GameSettingsPage = () => {
  return (
    <div>
      <EditPlayersContainer />
      <StartGameContainer/>
    </div>
  );
};

