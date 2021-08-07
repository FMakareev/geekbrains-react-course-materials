import React from 'react';

import {gameStateConnect} from "../../connects/gameStateConnect";


export const GameViewContainerRender = () => {

  return (
    <div>
      GameViewContainer
    </div>
  );
};

export const GameViewContainer = gameStateConnect(
  GameViewContainerRender
)