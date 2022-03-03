import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {createTodo, deleteTodo, changeTodo} from '../../store/todo/actions';
import {getTodoListByProject} from "../../store/todo/selectors";

export const TodosRender = ({todos, handleCreateTodo, handleDeleteTodo, handleChangeStatus}) => {
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

const useTodos = () => {

}

const mapStateToProps = (state, props) => {
    return ({
        todos: getTodoListByProject(props.match.params.projectId)(state)
    })
}

const mapDispatchToProps = (dispatch, props) => {
    const {projectId} = props.match.params

    return ({
        handleCreateTodo: () => {
            dispatch(createTodo(projectId, {
                id: Date.now(),
                name: 'task',
                status: false,
            }))
        },
        handleDeleteTodo: (id) => () => {
            dispatch(deleteTodo(projectId, id));
        },
        handleChangeStatus: (id, status) => () => {
            dispatch(changeTodo(projectId, id, !status))
        }
    })
}

const todoConnect = connect(mapStateToProps, mapDispatchToProps);

export const TodosConnect = withRouter(todoConnect(TodosRender))

