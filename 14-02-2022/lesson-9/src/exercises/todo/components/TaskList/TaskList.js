import {Button, Form, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import {taskStatusIsCompleted} from "../../../../constants";


export const TaskList = ({list, onChangeStatus, onRemove}) => {


  return (<ListGroup className="mb-3">
    {
      list?.map((item) => {
        return <ListGroupItem key={item.id}>
          <Stack direction="horizontal" gap={3}>
            <div style={{flexGrow: 1}}>
              <Stack direction="horizontal" gap={1}>
                <Form.Check
                  onChange={onChangeStatus(item.id, item.status)}
                  checked={taskStatusIsCompleted(item)}
                />
                <div>
                  {item.text}
                </div>
              </Stack>
            </div>
            <Button variant="danger" size="sm" onClick={onRemove(item.id)}>x</Button>
          </Stack>
        </ListGroupItem>
      })
    }
  </ListGroup>)
}
