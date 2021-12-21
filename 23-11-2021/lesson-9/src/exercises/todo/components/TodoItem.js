import React from 'react';
import {Stack, Form, Card, Button} from "react-bootstrap";


export const TodoItem = ({isDone, title, content, id, onChange, removeTodo}) => {
  return (
    <Card>
      <Card.Body>
        <Stack gap={3} direction="horizontal"  >
          <Form.Check
            type='checkbox'
            id={id}
            checked={isDone}
            onChange={() => {
              onChange(id, !isDone);
            }}
          />
          <Stack gap={3}>
            <h4>
              {title}
            </h4>
            <p>
              {content}
            </p>
          </Stack>
          <Button  onClick={() => removeTodo(id)}>X</Button>
        </Stack >
      </Card.Body>
    </Card>
  );
};
