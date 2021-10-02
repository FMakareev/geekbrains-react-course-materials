import * as styles from './App.module.css';
import {ListGroup} from "./components/ListGroup";
import {ListGroupItem} from "./components/ListGroupItem";

function App() {
  return (
    <div className={styles.app}>
      <ListGroup>

        <ListGroupItem tag={'a'} active={true}>
          item 1
        </ListGroupItem>

        <ListGroupItem disabled={true}>
          item 2
        </ListGroupItem>
        <ListGroupItem>
          item 3
        </ListGroupItem>
        <ListGroupItem/>
      </ListGroup>
    </div>
  );
}

export default App;
