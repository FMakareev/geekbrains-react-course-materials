import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from "./stores";
import {GameSettingsPage} from "./pages/GameSettingsPage";
import {GameLoadingPage} from "./pages/GameLoadingPage";
import {GameViewPage} from "./pages/GameViewPage";


/**
 * GameViewContainer - загрузка данных, получение данных (игроков, вопрос, ответ, список ответов)
 *  PlayerList - рендер списка игроков
 *  Question - текущий вопрос
 *  Answers - список ответов на вопрос
 *  Next - меняет вопрос/игрока
 * */



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/" exact component={GameSettingsPage}/>
          <Route path="/game/loading" exact component={GameLoadingPage}/>
          <Route path="/game/view" exact component={GameViewPage}/>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);