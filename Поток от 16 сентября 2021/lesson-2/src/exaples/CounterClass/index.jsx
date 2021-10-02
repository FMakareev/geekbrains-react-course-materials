import React from 'react';


const initialState = () => {

  return {
    count: 0,
  };
}

export class CounterClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log('constructor')

    this.state = initialState();
  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  increment = () => {
    // const newCount = this.state.count;
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });

    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 2000);

    // this.setState((state) => {
    //   const newCount = state.count + 1;
    //
    //   return {
    //     ...state,
    //     count: newCount,
    //   }
    // });
  }

  render() {
    // console.log('render')
    return <div>
      <div>
        counter: { this.state.count }
      </div>
      <button onClick={this.increment}>
        increment
      </button>
    </div>
  }
}