import React from 'react';

export const FnComponent = (props) => {
  return <div>
    <div>
      {props.user.name} {props.user.id}
    </div>
    <button
      type={props.type}
      title={props.title}
      onClick={props.onClick}
    >
      fn btn
    </button>
  </div>
}

export class ClassComponent extends React.Component {
  render(){
    console.log('ClassComponent: ', this.props);
    return (<div>
      <div>
        {this.props.user.name} {this.props.user.id}
      </div>
      <button
        {...this.props}
      >
        fn btn
      </button>
    </div>)
  }
}
