import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredByStatusTaskList} from "../../../../store/todo/selectors";
import {addTodoAction, changeTodoStatus, removeTodoAction, setFilterByStatusAction} from "../../../../store/todo";
import {useParams} from "react-router";
import {hasProjectSelector} from "../../../../store/project/selectors";




export const Tasks = () => {
  const [value, setValue] = useState();
  const { projectID } = useParams();

  const dispatch = useDispatch();

  const list = useSelector(getFilteredByStatusTaskList(projectID))

  const hasProject = useSelector(hasProjectSelector(projectID))

  if(!hasProject) {
    return <div>404</div>
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch({
    //   type: ADD_TODO,
    //   payload: {
    //     id: Date.now(),
    //     text: value,
    //     status: false,
    //   }
    // })
    dispatch(addTodoAction(projectID,{
      id: Date.now(),
      text: value,
      status: false,
    }))
  }

  const onChangeStatus = (todoId) => (event) => {
    dispatch(changeTodoStatus(todoId, event.target.checked))
  }

  const onRemove = (todoId) => () => {
    dispatch(removeTodoAction(todoId))
  }

  const onChangeStatusFilter = (status) => () => {
    dispatch(setFilterByStatusAction(status))
  }

  return <div>
    <h1>
      reduxExample
    </h1>
    <button onClick={onChangeStatusFilter()}>all</button>
    <button onClick={onChangeStatusFilter(false)}>FALSE</button>
    <button onClick={onChangeStatusFilter(true)}>TRUE</button>
    <ul>
      {
        list?.map((item) => <li key={item.id}>
          <input onChange={onChangeStatus(item.id)} type="checkbox" checked={item.status}/>
          {item.text}
          <button onClick={onRemove(item.id)}>x</button>
        </li>)
      }
    </ul>
    <br/>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value}/>
      <button>save</button>
    </form>
  </div>
}
