import { useState, createContext, useContext } from "react";
import { Form, Button } from "react-bootstrap";

const ListContext = createContext({
  list: []
});

const ComponentC = () => {
  const { list } = useContext(ListContext);

  return (
    <div>
      <p>ComponentC</p>
      {list?.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

const ComponentB = () => {
  const { addItem } = useContext(ListContext);
  const [value, setValue] = useState("");

  const onSend = () => {
    addItem(value);
    setValue("");
  };

  return (
    <div>
      <p>ComponentB</p>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Control
          onChange={(value) => {
            console.log(value.target.value);
            setValue(value.target.value);
          }}
          value={value}
        />
        <Button onClick={onSend}>send</Button>
      </Form.Group>
    </div>
  );
};

const ComponentA = () => {
  return (
    <div>
      <h2>ComponentA</h2>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export const Context = () => {
  const [list, setState] = useState([]);

  const addItem = (value) => {
    setState(list.concat([value]));
  };

  return (
    <div>
      <h1>Context</h1>
      <ListContext.Provider
        value={{
          list,
          addItem
        }}
      >
        <ComponentA />
      </ListContext.Provider>
    </div>
  );
};
