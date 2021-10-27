import React from "react";

export const Types = () => {
    return (
        <div>
            <h1>Types</h1>
        </div>
    );
};

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

const Input = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    );
};
