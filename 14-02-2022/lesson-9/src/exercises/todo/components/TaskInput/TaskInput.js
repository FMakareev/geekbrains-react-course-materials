import {Button, Form} from "react-bootstrap";


export const TaskInput = ({onSubmit, onChange, value}) => (    <Form onSubmit={onSubmit}>
  <Form.Group controlId="name">
    <Form.Control type="text" onChange={onChange} value={value} placeholder="Enter task text" />
  </Form.Group>
  <Button variant="primary" type="submit">
    save
  </Button>
</Form>)
