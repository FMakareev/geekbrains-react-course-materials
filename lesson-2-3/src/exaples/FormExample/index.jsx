import React from 'react';

export class FormExample  extends React.Component{

  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    // console.log(this.textInput);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newValue = this.textInput.current.value;
    if (this.props.onSubmit) {
      this.props.onSubmit(newValue);
    }
    this.setState({
      value: newValue,
    })
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={() => {
          this.setState({
            ...this.state
          })
        }}>
          refresh
        </button>
        <h1>React Ref - createRef</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }

}