import {Button, ButtonGroup} from "react-bootstrap";
import {TASK_STATUS_FILTER} from "../../../../constants";


export const TaskFilter = ({onChangeStatusFilter, taskStatusFilterActive, currentStatus}) => {
  return (<ButtonGroup className="mb-3">
    <Button
      onClick={onChangeStatusFilter(TASK_STATUS_FILTER.all)}
      variant={taskStatusFilterActive(TASK_STATUS_FILTER.all)(currentStatus)}
    >
      {TASK_STATUS_FILTER.all}
    </Button>
    <Button
      onClick={onChangeStatusFilter(TASK_STATUS_FILTER.working)}
      variant={taskStatusFilterActive(TASK_STATUS_FILTER.working)(currentStatus)}
    >
      {TASK_STATUS_FILTER.working}
    </Button>
    <Button
      onClick={onChangeStatusFilter(TASK_STATUS_FILTER.completed)}
      variant={taskStatusFilterActive(TASK_STATUS_FILTER.completed)(currentStatus)}
    >
      {TASK_STATUS_FILTER.completed}
    </Button>
  </ButtonGroup>)
}
