import {useCallback, useState} from "react";
import {nanoid} from "nanoid";


const initialState = []

export const useTaskList = () => {
  const [taskList, setTaskList] = useState(initialState);

  const addNewTask = useCallback((text) => {
    const task = {
      status: false,
      text,
      id: nanoid(),
    }
    setTaskList((prevState) => {
      return [
        ...prevState,
        task,
      ]
    })
  }, []);

  const changeStatus = useCallback((index, status) => () => {
    setTaskList((prevTaskList) => {
      const cloneTaskList = [...prevTaskList];

      cloneTaskList[index] = {
        ...cloneTaskList[index],
        status: !status
      }
      return cloneTaskList;
    })
  }, [])


  return {
    taskList,
    addNewTask,
    changeStatus,
    setTaskList
  }
}
