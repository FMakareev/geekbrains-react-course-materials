import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



// v1
// const CounterView = (props) => {
//
//   return <div>
//     <div>
//       счет: {props.count}
//     </div>
//     <button onClick={props.onDecrement}>-</button>
//     <button onClick={props.onIncrement}>+</button>
//   </div>
// }
//

const CounterControls = (props) => {

  return <div>
    <button onClick={props.onDecrement}>-</button>
    <button onClick={props.onIncrement}>+</button>
  </div>
}

const CounterView = (props) => {
  return <div>
    счет: {props.count}
  </div>
}

const Counter = (props) => {

  return <div>
    <CounterView count={props.count}/>
    <CounterControls onDecrement={props.onDecrement} onIncrement={props.onIncrement} />
  </div>
}

const AppCounter = () => {
  const [count, setState] = useState(0);

  return <Counter
    count={count}
    onDecrement={() => {
      console.log('onDecrement')
      setState(count - 1);
    }}
    onIncrement={() => {
      console.log('onIncrement')
      setState(count + 1);
    }}
  />
}

class AppClass extends React.Component {

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return <>
      <button
        style={{
          backgroundColor: this.state.isOpen ? 'green' : 'red',
        }}
        onClick={this.toggle}
      >
        {
          this.state.isOpen ? 'Close' : 'Open'
        }
      </button>

      {
        this.state.isOpen && <h1>
          hello
        </h1>
      }
      {
        !this.state.isOpen && <h1>
          goodbay
        </h1>
      }
    </>
  }
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const getElement = () => {
    return <div>
      element
    </div>
  }

  return <div>
    <button
      style={{
        backgroundColor: isOpen ? 'green' : 'red',
      }}
      onClick={toggle}
    >
      {
        isOpen ? 'Close' : 'Open'
      }
    </button>

    {
      isOpen && <h1>
        hello
      </h1>
    }
    {
      !isOpen && <h1>
        goodbay
      </h1>
    }

    {
      getElement()
    }
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <AppClass/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
