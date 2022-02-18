

/**
 * 1. хранение, обновление, рендер данных (useState)
 * 2. кеширование вычислений (useMemo)
 * 3. кеширование ссылок на функции (useCallback)
 * 4. управление сайд эффектами (useEffect)
 * */
import {useCreateTaskForm} from "./hooks/useCreateTaskForm";
import {useTaskList} from "./hooks/useTaskList";
import {FILTER_BY_STATUS_ALL, FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK} from "./constants";
import {useFilterByStatus} from "./hooks/useFilterByStatus";
import {useTaskFilteredByStatus} from "./hooks/useTaskFilteredByStatus";

import {useCacheTaskList} from "./hooks/useCacheTaskList";

/**
 * 1. форма для создания задач (useState, useCallback)
 * 2. рендер списка задач (.map)
 * 3. фильтрация (useMemo, useState)
 * 4. изменение элементов списка (useCallback)
 * 5. кеширование списка задач в локальном хранилище
 * 6. инициализация списка задач из локального хранилища
 * */

function App() {
  const { addNewTask, taskList, changeStatus, setTaskList } = useTaskList();

  useCacheTaskList({setTaskList, taskList})

  const { filterStatus, onChangeStatus } = useFilterByStatus();

  const { filteredList } = useTaskFilteredByStatus({list: taskList, filterStatus});

  const {
    handleSubmit,
    onChangeInput,
    inputValue,
  } = useCreateTaskForm({ onSubmit: addNewTask });


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={onChangeInput} type="text"/>
        <button type="submit">save</button>
      </form>
      <select value={filterStatus} onChange={onChangeStatus}>
        <option value={FILTER_BY_STATUS_ALL}>all</option>
        <option value={FILTER_BY_STATUS_IN_WORK}>in work</option>
        <option value={FILTER_BY_STATUS_COMPLETED}>complete</option>
      </select>

      <ul>
        {
          filteredList.map(({status, text}, index) => {
            return <li key={index}>
              <input
                checked={status}
                type="checkbox"
                onChange={changeStatus(index, status)}
              /> {text}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
