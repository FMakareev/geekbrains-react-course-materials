import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';
import {compose} from 'redux';
import {questionsConnect} from "../../connects/questionsConnect";
import {gameStateConnect} from "../../connects/gameStateConnect";
import {createGameState} from "../../entities/gameState";


export const GameViewContainerRender = ({isLoadingQuestions, loadingQuestions, startGame}) => {

  useEffect(() => {
    loadingQuestions();
  }, [])

  useEffect(() => {
    if (!isLoadingQuestions) {
      startGame(createGameState());
    }
  }, [isLoadingQuestions])

  if (isLoadingQuestions) {
    return <CircularProgress/>
  }
  return (
    <div>
      GameViewContainer
    </div>
  );
};

const enhancers = compose(gameStateConnect, questionsConnect);

export const GameViewContainer = enhancers(
  GameViewContainerRender
)