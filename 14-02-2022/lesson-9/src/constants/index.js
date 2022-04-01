


export const TASK_STATUS = {
    working: 'working',
    completed: 'completed'
}

export const TASK_STATUS_FILTER = {
    all: 'all',
    ...TASK_STATUS,
}

export const toggleTaskStatus = (status) => status === TASK_STATUS.working ? TASK_STATUS.completed : TASK_STATUS.working;

export const taskStatusIsCompleted = (task) => task.status === TASK_STATUS.completed;

