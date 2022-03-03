import { useDispatch, useSelector} from 'react-redux';
import {createTodo, deleteTodo, changeTodo} from '../../store/todo/actions';
import {useParams} from "react-router-dom";
import {getTodoListByProject} from "../../store/todo/selectors";

export const Todos = () => {
    const {projectId} = useParams();
    const todos = useSelector(getTodoListByProject(projectId))
    const dispatch = useDispatch();

    const handleCreateTodo = () => {
        dispatch(createTodo(projectId, {
            id: Date.now(),
            name: 'task',
            status: false,
        }))
    }

    const handleDeleteTodo = (id) => () => {
        dispatch(deleteTodo(projectId, id));
    }

    const handleChangeStatus = (id, status) => () => {
        dispatch(changeTodo(projectId, id, !status))
    }

    return <div>
        <button onClick={handleCreateTodo}>
            create
        </button>

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
