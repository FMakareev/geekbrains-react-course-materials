import { useDispatch, useSelector} from 'react-redux';
import {CREATE_TODO, CHANGE_TODO_STATUS, DELETE_TODO} from '../../store/todo/actions';

export const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const createTodo = () => {
        dispatch({
            type: CREATE_TODO,
            payload: {
                id: Date.now(),
                name: 'task',
                status: false,
            },
        })
    }

    const deleteTodo = (id) => () => {
        dispatch({
            type: DELETE_TODO,
            payload: id,
        })
    }

    const changeStatus = (id, status) => () => {
        dispatch({
            type: CHANGE_TODO_STATUS,
            payload: {
                id,
                status: !status,
            }
        })
    }



    return <div>
        <button onClick={createTodo}>
            create
        </button>

        <ul>
            {todos.map(({id, name, status}) => <li key={id}>
                <input onClick={changeStatus(id, status)} type="checkbox" checked={status}/>
                {name}
                <button onClick={deleteTodo(id)} >x</button>
            </li>)}
        </ul>
    </div>
}