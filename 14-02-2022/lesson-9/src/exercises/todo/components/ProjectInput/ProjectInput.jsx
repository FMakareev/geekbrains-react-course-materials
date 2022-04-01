import React from 'react';
import {Button, Form, Stack} from "react-bootstrap";


export const ProjectInput = ({onSubmit, onChange, value}) => {
    return (
      <Form onSubmit={onSubmit}>
        <Stack className="mb-3" direction="horizontal" gap={3}>
          <Form.Group controlId="name">
            <Form.Control type="text" onChange={onChange} value={value} placeholder="Enter project name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            save
          </Button>
        </Stack>
      </Form>
    );
};
