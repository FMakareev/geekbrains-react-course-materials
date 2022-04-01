import {useParams} from "react-router";
import {TaskInput} from "../TaskInput/TaskInput";
import {TaskList} from "../TaskList/TaskList";
import {TaskFilter} from "../TaskFilter/TaskFilter";
import {useTaskInput} from "../../hooks/useTaskInput";
import {useTaskFilter} from "../../hooks/useTaskFilter";
import {useTaskList} from "../../hooks/useTaskList";
import {withHasProject} from "../../hocs/withHasProject";




export const TasksRender = () => {
  const { projectID } = useParams();

  const { taskNameValue, onChangeTaskName, onSubmitTaskName} = useTaskInput({projectID});
  const { currentStatus, onChangeStatusFilter, taskStatusFilterActive } = useTaskFilter();
  const { taskList, onChangeTaskStatus, onRemoveTask} = useTaskList({projectID});

  return (<div>
    <h1 className="mb-3">
      Tasks
    </h1>

    <TaskFilter
      currentStatus={currentStatus}
      taskStatusFilterActive={taskStatusFilterActive}
      onChangeStatusFilter={onChangeStatusFilter}
    />

    <TaskList list={taskList} onRemove={onRemoveTask} onChangeStatus={onChangeTaskStatus}/>

    <TaskInput value={taskNameValue} onSubmit={onSubmitTaskName} onChange={onChangeTaskName}/>
  </div>)
}


export const Tasks = withHasProject(TasksRender, () => <h1>404, project is not found</h1>);
