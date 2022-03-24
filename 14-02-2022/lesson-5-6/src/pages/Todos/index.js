import { useDispatch, useSelector} from 'react-redux';
import {
    createTodoThunk,
    deleteTodoThunk,
    changeTodoThunk
} from '../../store/todo/actions';
import {useParams} from "react-router-dom";
import {getIsLoadingTodo, getTodoListByProject, getErrorTodo} from "../../store/todo/selectors";

export const Todos = () => {
    const {projectId} = useParams();
    const todos = useSelector(getTodoListByProject(projectId))
    const isLoading = useSelector(getIsLoadingTodo)
    const error = useSelector(getErrorTodo)
    const dispatch = useDispatch();

    const handleCreateTodo = () => {
        dispatch(createTodoThunk(projectId, {
            id: Date.now(),
            name: 'task',
            status: false,
        }))
    }

    const handleDeleteTodo = (id) => () => {
        dispatch(deleteTodoThunk(projectId, id));
    }

    const handleChangeStatus = (id, status) => () => {
        dispatch(changeTodoThunk(projectId, id, !status))
    }

    return <div>
        <button onClick={handleCreateTodo}>
            create
        </button>
        {
            isLoading &&
          <p>Loading...</p>
        }
        {
            error &&
          <p>ERROR</p>
        }

        <ul>
            {todos?.map(({id, name, status}) => <li key={id}>
                <input onClick={handleChangeStatus(id, status)}
                       type="checkbox"
                       checked={status}
                />
                {name}
                <button onClick={handleDeleteTodo(id)} >x</button>
            </li>)}
        </ul>
    </div>
}
