import React from "react";

// export const Message = (props) => {
//   return <div>{props.message}</div>
// }

export class Message extends React.Component {
    render() {
        return (
            <div
                style={{
                    background: "red"
                }}
            >
                {this.props.message}
            </div>
        );
    }
}
