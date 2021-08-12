import {useToggle} from "./hooks/useToggle";
import {ExampleWithDidUpdate} from "./containers/ExampleWithDidUpdate";
import {ExampleWithDocumentTitle} from "./containers/ExampleWithDocumentTitle";
import {ExampleWindowEvent} from "./containers/ExampleWindowEvent";

function App() {
  const [toggleDidUpdate, toggleDidUpdateHandlers] = useToggle();
  const [toggleDocumentTitle, toggleDocumentTitleHandlers] = useToggle();
  const [toggleWindowEvent, toggleWindowEventHandlers] = useToggle();

  return (
    <div className="App">

      <nav>
        <button onClick={toggleDidUpdateHandlers.onToggle}>
          toggleDidUpdate: {toggleDidUpdate}
        </button>
        <button onClick={toggleDocumentTitleHandlers.onToggle}>
          toggleDocumentTitle: {toggleDocumentTitle}
        </button>
        <button onClick={toggleWindowEventHandlers.onToggle}>
          toggleWindowEvent: {toggleWindowEvent}
        </button>
      </nav>
      {
        toggleDidUpdate &&
        <ExampleWithDidUpdate/>
      }
      {
        toggleDocumentTitle &&
        <ExampleWithDocumentTitle/>
      }
      {
        toggleWindowEvent &&
        <ExampleWindowEvent/>
      }
    </div>
  );
}

export default App;
