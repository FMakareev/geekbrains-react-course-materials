import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {deleteTodo, changeTodo, createTodoThunk, deleteTodoThunk} from '../../store/todo/actions';
import {getErrorTodo, getIsLoadingTodo, getTodoListByProject} from "../../store/todo/selectors";

export const TodosRender = ({
                                todos, handleCreateTodo, handleDeleteTodo, handleChangeStatus, isLoading,error
                                }) => {

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


const mapStateToProps = (state, props) => {
    return ({
        todos: getTodoListByProject(props.match.params.projectId)(state),
        isLoading: getIsLoadingTodo(state),
        error: getErrorTodo(state),
    })
}

const mapDispatchToProps = (dispatch, props) => {
    const {projectId} = props.match.params

    return ({
        handleCreateTodo: () => {
            dispatch(createTodoThunk(projectId, {
                id: Date.now(),
                name: 'task',
                status: false,
            }))
        },
        handleDeleteTodo: (id) => () => {
            dispatch(deleteTodoThunk(projectId, id));
        },
        handleChangeStatus: (id, status) => () => {
            dispatch(changeTodo(projectId, id, !status))
        }
    })
}

const todoConnect = connect(mapStateToProps, mapDispatchToProps);

export const TodosConnect = withRouter(todoConnect(TodosRender))

