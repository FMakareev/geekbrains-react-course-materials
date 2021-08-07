import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom/cjs/react-router-dom";
import {compose} from "redux";
import {gameStateConnect} from "../connects/gameStateConnect";
import {questionsConnect} from "../connects/questionsConnect";
import {createGameState} from "../entities/gameState";
import {CircularProgress} from "@material-ui/core";
import {playersConnect} from "../connects/playersConnect";


//
export const GameLoadingPageRender = ({isLoadingQuestions, loadingQuestions, startGame, questions, players}) => {

  useEffect(() => {
    loadingQuestions();
  }, [])

  useEffect(() => {
    if (isLoadingQuestions) {
      return;
    }
    startGame(createGameState({questions, players}));
  }, [isLoadingQuestions])

  if (isLoadingQuestions) {
    return <CircularProgress/>
  }

  return <Redirect to="/game/view" />
};

const enhancers = compose(gameStateConnect, questionsConnect, playersConnect);

export const GameLoadingPage = enhancers(
  GameLoadingPageRender
)