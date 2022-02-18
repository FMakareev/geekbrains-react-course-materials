import {useEffect} from "react";
import {useDidUpdate} from "./useDidUpdate";


const key = 'task-list'

export const useCacheTaskList = ({setTaskList, taskList}) => {
  useEffect(() => {
    const json = localStorage.getItem(key);
    if(json){
      setTaskList(JSON.parse(json))
    }
  }, [])

  useDidUpdate(() => {
    localStorage.setItem(key, JSON.stringify(taskList));
  }, [taskList]);
}
