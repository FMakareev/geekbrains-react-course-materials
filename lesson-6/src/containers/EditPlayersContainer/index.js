import React from 'react';
import {Button} from '@material-ui/core';
import faker from 'faker';
import {PlayerList} from "../../components/PlayerList";
import {playersConnect} from "../../connects/playersConnect";
import {createPlayer} from "../../entities/player";


export const EditPlayersContainerRender = ({addPlayer, removePlayer, players}) => {
  return (
    <div>
      <PlayerList
        players={players}
        removePlayer={removePlayer}
      />

      <Button onClick={() => {
        addPlayer(createPlayer(faker.name.firstName()))
      }}>
        add player
      </Button>
    </div>
  );
};


export const EditPlayersContainer = playersConnect(EditPlayersContainerRender);

