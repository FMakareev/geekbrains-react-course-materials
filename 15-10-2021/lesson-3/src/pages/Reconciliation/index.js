import React from "react";
import { format } from "date-fns";

export const Reconciliation = () => {
  return (
    <div>
      <h1>Reconciliation</h1>

      <ToDoList />
    </div>
  );
};

class ToDoList extends React.Component {
  constructor() {
    super();

    this.addToStart = this.addToStart.bind(this);
    this.addToEnd = this.addToEnd.bind(this);
    this.sortByEarliest = this.sortByEarliest.bind(this);
    this.sortByLatest = this.sortByLatest.bind(this);

    const date = new Date();
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
          value: ""
        }
      ]
    };
  }

  onChangeTodo = (id, value) => {
    const copyList = [...this.state.list];

    const index = copyList.findIndex((item) => item.id === id);
    copyList[index] = {
      ...copyList[index],
      value
    };
    this.setState({
      list: [...copyList]
    });
  };

  sortByEarliest() {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList]
    });
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList]
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {
        id: nextId,
        createdAt: date,
        value: ""
      }
    ];
    this.setState({
      list: newList,
      todoCounter: nextId
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      { id: nextId, createdAt: date, value: "" },
      ...this.state.list
    ];
    this.setState({
      list: newList,
      todoCounter: nextId
    });
  }

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <ControlPanel
          addToStart={this.addToStart}
          addToEnd={this.addToEnd}
          sortByEarliest={this.sortByEarliest}
          sortByLatest={this.sortByLatest}
        />
        <BadTable onChangeTodo={this.onChangeTodo} list={this.state.list} />
        <GoodTable onChangeTodo={this.onChangeTodo} list={this.state.list} />
      </div>
    );
  }
}
const GoodTable = (props) => {
  return (
    <div>
      <h3>GoodTable</h3>
      <table>
        <tr>
          <th>ID</th>
          <th />
          <th>created at</th>
        </tr>
        {props.list.map((todo) => (
          <ToDo key={todo.id} onChangeTodo={props.onChangeTodo} {...todo} />
        ))}
      </table>
    </div>
  );
};

const BadTable = (props) => {
  return (
    <div>
      <h3>BadTable</h3>
      <table>
        <tr>
          <th>ID</th>
          <th />
          <th>created at</th>
        </tr>
        {props.list.map((todo, index) => (
          <ToDo key={index} onChangeTodo={props.onChangeTodo} {...todo} />
        ))}
      </table>
    </div>
  );
};

const ControlPanel = (props) => {
  return (
    <>
      <button onClick={props.addToStart}>Add New to Start</button>
      <button onClick={props.addToEnd}>Add New to End</button>
      <button onClick={props.sortByEarliest}>Sort by Earliest</button>
      <button onClick={props.sortByLatest}>Sort by Latest</button>
    </>
  );
};

const ToDo = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input
          value={props.value}
          onChange={(event) => {
            props.onChangeTodo(props.id, event.target.value);
            //setValue(event.target.value);
          }}
        />
      </td>
      <td>
        <label>{format(props.createdAt, "HH:mm:ss")}</label>
      </td>
    </tr>
  );
};
