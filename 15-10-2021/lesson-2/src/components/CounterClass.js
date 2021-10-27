import React from "react";

export class CounterClass extends React.Component {
    // state = {
    //     count: 0
    // }

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            text: "text"
        };

        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    increment = () => {
        this.setState((state) => {
            return {
                count: state.count - 1
            };
        });
    };

    render() {
        return (
            <div>
                <h2>CounterClass</h2>
                <h4>count: {this.state.count}</h4>
                <h4>count: {this.state.text}</h4>
                <button onClick={this.decrement}>decrement</button>

                <button onClick={this.increment}> increment</button>
            </div>
        );
    }
}
