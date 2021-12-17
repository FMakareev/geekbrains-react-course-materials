import { ListGroup, Card, Form } from "react-bootstrap";

export const List = ({ list }) => (
  <Card>
    <ListGroup variant="flush">
      {list?.map(({ id, title, completed }) => (
        <ListGroup.Item key={id}>
          <Form.Check
            checked={completed}
            type="checkbox"
            id={id}
            label={title}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);
