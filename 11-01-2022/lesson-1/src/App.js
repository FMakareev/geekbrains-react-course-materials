import './App.css';
import {Button} from "./components";

function App() {
  return (
    <div className="App">

      {
        2+3
      }

      {
        "test"+"test2"
      }

      {
        [1,2,3].map((item) => <div>{item}</div>)
      }

      <br/>
      <br/>
      <br/>

      <Button>
      </Button>
      <Button>
        <Button>
          <Button>
            <Button>
              new text
            </Button>
            <Button>
              new text
            </Button>
            <Button>
              new text
            </Button>
          </Button>
        </Button>
      </Button>
      <Button>
        new text
      </Button>

      <Button
        color="alert">
        alert
      </Button>
      <Button disabled={false}>
        disabled=false
      </Button>
      <Button disabled={true}>
        disabled=true
      </Button>
      <Button disabled>
        disabled=true
      </Button>
      <Button
        color="primary"
        onClick={() => {
          console.log('click')
        }}
      >
        color="primary"
      </Button>
    </div>
  );
}

export default App;
