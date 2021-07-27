import "./App.css";
import { FormWithHOCExample } from "./examples/FormWithHOCExample";
import { SimpleFormContext } from "./examples/SimpleFormContext";
import { ReduxUserListExample } from "./examples/ReduxUserListExample";

function App() {
  return (
    <div className="App">
      <ReduxUserListExample />
      <FormWithHOCExample />
      <SimpleFormContext />
    </div>
  );
}

export default App;
