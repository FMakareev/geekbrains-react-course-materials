import "./styles.css";
import { CounterFunction } from "./components/CounterFunction";
import { CounterClass } from "./components/CounterClass";
import { SetStateSandbox } from "./components/SetStateSandbox";

export default function App() {
    return (
        <div className="App">
            <h1>Lesson 2</h1>
            <SetStateSandbox />
            {/* <CounterClass />
            <CounterFunction /> */}
        </div>
    );
}
