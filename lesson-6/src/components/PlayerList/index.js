import React from 'react';
import {List} from "@material-ui/core";
import {PlayerCard} from "../PlayerCard";


export const PlayerList = ({players, removePlayer}) => {
  return (
    <List>
      {
        players?.map((player) => (
          <PlayerCard
            remove={ removePlayer ? () => removePlayer(player.name) : undefined}
            key={player.name}
            {...player}
          />
        ))
      }
    </List>
  );
};