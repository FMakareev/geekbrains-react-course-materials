import {Container, Button, Input, Box, List, ListItem , ListItemText, MenuItem, Select, Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import {useTaskList} from "../../hooks/useTaskList";
import {useCacheTaskList} from "../../hooks/useCacheTaskList";
import {useFilterByStatus} from "../../hooks/useFilterByStatus";
import {useTaskFilteredByStatus} from "../../hooks/useTaskFilteredByStatus";
import {useCreateTaskForm} from "../../hooks/useCreateTaskForm";
import {FILTER_BY_STATUS_ALL, FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK} from "../../constants";
import {Link, useParams} from "react-router-dom";
import {getTaskLink} from "../../navigation";


/**
 * 1. хранение, обновление, рендер данных (useState)
 * 2. кеширование вычислений (useMemo)
 * 3. кеширование ссылок на функции (useCallback)
 * 4. управление сайд эффектами (useEffect)
 * */

/**
 * 1. форма для создания задач (useState, useCallback)
 * 2. рендер списка задач (.map)
 * 3. фильтрация (useMemo, useState)
 * 4. изменение элементов списка (useCallback)
 * 5. кеширование списка задач в локальном хранилище
 * 6. инициализация списка задач из локального хранилища
 * */

export function Tasks() {

  const {projectId} = useParams();
  console.log(projectId)
  const { addNewTask, taskList, changeStatus, setTaskList } = useTaskList();

  useCacheTaskList({setTaskList, taskList})

  const { filterStatus, onChangeStatus } = useFilterByStatus();

  const { filteredList } = useTaskFilteredByStatus({list: taskList, filterStatus});

  const {
    handleSubmit,
    onChangeInput,
    inputValue,
  } = useCreateTaskForm({ onSubmit: addNewTask });


  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
      maxWidth="xs">
      <Paper
        sx={{
          padding: 2,
          height: '80vh',
          width: '100%'
        }}
        elevation={3}
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <Input
            value={inputValue}
            onChange={onChangeInput}
            type="text"
            placeholder="enter your message"
          />
          <Button type="submit" variant="contained">save</Button>

        </Box>
        <Select
          value={filterStatus} onChange={onChangeStatus}
        >
          <MenuItem value={FILTER_BY_STATUS_ALL}>all</MenuItem>
          <MenuItem value={FILTER_BY_STATUS_IN_WORK}>in work</MenuItem>
          <MenuItem value={FILTER_BY_STATUS_COMPLETED}>complete</MenuItem>
        </Select>

        <List>
          {
            filteredList.map(({status, text, id}, index) => {
              return <ListItem
                component={Link}
                // to={`/projects/${projectId}/${id}`}
                to={getTaskLink(projectId, id)}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={changeStatus(index, status)}
                    checked={status}
                  />
                }
                key={id}>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItem>
            })
          }
        </List>
      </Paper>
    </Container>
  );
}
