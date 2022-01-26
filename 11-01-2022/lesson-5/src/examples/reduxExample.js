import {useSelector, useDispatch} from 'react-redux';
import {useState} from "react";
import {ADD_TODO, CHANGE_TODO_STATUS, REMOVE_TODO} from "../store/todo";

const add = (a) => (b) => a + b;

const add3 = add(3)


export const ReduxExample = () => {
  const [value, setValue] = useState();
  const [statusFilter, setStatusFilter] = useState(undefined);

  const dispatch = useDispatch();
  const list = useSelector((state) => {

    if(statusFilter === undefined) {
      return state.list;
    }

    return state.list.filter(({status}) => status === statusFilter);
  })

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        text: value,
        status: false,
      }
    })
  }

  const onChangeStatus = (todoId) => (event) => {
    dispatch({
      type: CHANGE_TODO_STATUS,
      payload: {
        id: todoId,
        status: event.target.checked,
      },
    })
  }

  const onRemove = (todoId) => () => {
    dispatch({
      type: REMOVE_TODO,
      payload: todoId,
    })
  }

  const onChangeStatusFilter = (status) => () => {
    setStatusFilter(status);
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
        list.map((item) => <li key={item.id}>
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
