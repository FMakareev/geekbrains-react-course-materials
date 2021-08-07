import {GameSettingsPage} from "./pages/PlayerListPage";

/**
 * 1. отобразить список игроков
 * 2. добавить игрока/удалить
 * 3. начать игру получив список вопросов
 * 4. итерировать вопросы путем ответа на них
 * 5. показать варианты ответов
 * 6. показать кол-во баллов
 * 7. отвечаем на вопросы по порядку, если ошибся то ход к следующему игроку и отвечает на след вопрос.
 * */


function App() {
  return (
    <div className="App">
      <GameSettingsPage/>
    </div>
  );
}

export default App;