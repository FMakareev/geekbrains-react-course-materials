import React from 'react';
import {useSimpleForm} from "../hooks/useSimpleForm";
import {createTodo} from "../models";
import {Button, Form} from "react-bootstrap";

export const TodoCreator = ({title, content}) => {
  const {
    values,
    setFieldValue,
    getFieldValue,
    resetForm
  } = useSimpleForm(createTodo(title, content))
  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(event) => {
          setFieldValue('title', event.target.value)
        }} type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control onChange={(event) => {
          setFieldValue('content', event.target.value)
        }}  type="text" placeholder="Enter content" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};
