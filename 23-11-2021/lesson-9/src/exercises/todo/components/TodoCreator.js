import React from 'react';
import {useSimpleForm} from "../hooks/useSimpleForm";
import {Button, Form} from "react-bootstrap";

export const TodoCreator = ({value, onSend}) => {
  const {
    values,
    setFieldValue,
    getFieldValue,
    resetForm
  } = useSimpleForm(value)
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onSend(values);
      resetForm();
    }}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={(event) => {
            setFieldValue('title', event.target.value)
          }}
          value={getFieldValue('title')}
          type="text"
          placeholder="Enter title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          value={getFieldValue('content')}
          onChange={(event) => {
            setFieldValue('content', event.target.value)
          }}
          type="text"
          placeholder="Enter content"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};
