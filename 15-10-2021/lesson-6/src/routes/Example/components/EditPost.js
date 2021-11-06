import {Form, Button} from 'react-bootstrap';
import {useState, useCallback} from 'react';


export const EditPost = ({initialValues,onSave}) => {
  const [formValue, setFormValue] = useState(initialValues ||{
    title: '',
    content: '',
  });

  const formReset = useCallback(() => {
    setFormValue({
      title: '',
      content: '',
    })
  }, []);

  /** @param {'title' | 'content'} name */
  const getFormValueByName = (name) => formValue[name];

  /** @param {'title' | 'content'} name */
  const onChange = (name) => (event) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onSave(formValue);
    formReset()
  }

  return <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="title">
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={onChange('title')} value={getFormValueByName('title')} type="text"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="content">
      <Form.Label>Content</Form.Label>
      <Form.Control onChange={onChange('content')} value={getFormValueByName('content')} as="textarea" rows={3}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
}
