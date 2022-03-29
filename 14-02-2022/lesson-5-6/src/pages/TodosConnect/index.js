import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import { changeTodo, createTodoThunk, deleteTodoThunk, getTodosThunk} from '../../store/todo/actions';
import {getErrorTodo, getIsLoadingTodo, getTodoListByProject} from "../../store/todo/selectors";
import {useEffect} from "react";
import {useForm} from "../../hooks/useForm";

export const TodosRender = ({
                                todos,
                                handleCreateTodo,
                                handleDeleteTodo,
                                handleChangeStatus,
                                isLoading,
                                error,
                                getTodos,
                                match
                                }) => {
    const {projectId} = match.params
    const {onChange, onSubmit, getValue} = useForm({content: ''}, handleCreateTodo)

    useEffect(() => {

        getTodos(projectId)
    }, [projectId])

    return <div>
        <form onSubmit={onSubmit} >
            <input type="text" value={getValue('content')} onChange={onChange('content')}/>
            <button>
                create
            </button>
        </form>
        {
          isLoading &&
          <p>Loading...</p>
        }
        {
          error &&
          <p>ERROR</p>
        }
        <ul>
            {todos?.map(({id, content, status}) => <li key={id}>
                <input onClick={handleChangeStatus(id, status)}
                       type="checkbox"
                       checked={status}
                />
                {content}
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
        handleCreateTodo: (values) => {
            dispatch(createTodoThunk(projectId, values))
        },
        handleDeleteTodo: (id) => () => {
            dispatch(deleteTodoThunk(projectId, id));
        },
        handleChangeStatus: (id, status) => () => {
            dispatch(changeTodo(projectId, id, !status))
        },
        getTodos: (projectId) => {
            dispatch(getTodosThunk(projectId))
        }
    })
}

const todoConnect = connect(mapStateToProps, mapDispatchToProps);

export const TodosConnect = withRouter(todoConnect(TodosRender))

