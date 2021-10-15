import { Alert, Button } from "react-bootstrap";

export const Error = ({ reload }) => (
  <Alert variant="danger">
    Oops, something went wrong!
    <Button onClick={reload}>Reload</Button>
  </Alert>
);
