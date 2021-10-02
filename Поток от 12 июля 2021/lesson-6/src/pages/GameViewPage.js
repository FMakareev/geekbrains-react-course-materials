import React from 'react';

import {gameStateConnect} from "../connects/gameStateConnect";
import {QuestionCard} from "../components/QuestionCard";
import {AnswerList} from "../components/AnswerList";
import {PlayerList} from "../components/PlayerList";


export const GameViewPageRender = ({activeQuestion, isShowAnswer, correctAnswer, allAnswers,players, activePlayer}) => {

  return <div>
    <PlayerList selectedPlayer={activePlayer?.name} players={players}/>
    <QuestionCard
      category={activeQuestion.category}
      question={activeQuestion.question}
    />
    <AnswerList
      isShowAnswer={isShowAnswer}
      correctAnswer={correctAnswer}
      chooseAnswer={null}
      allAnswers={allAnswers}
    />
  </div>
};


export const GameViewPage = gameStateConnect(
  GameViewPageRender
)