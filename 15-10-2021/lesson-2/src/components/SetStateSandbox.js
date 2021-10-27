import React, { useEffect, useState } from "react";
import { useToggle } from "../hooks";

const ChildComponent = (props) => {
    // useEffect(() => {
    //     console.log("update props.count", props.count);
    // }, [props.count]);

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("update props.count", props.count);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [props]);

    // useEffect(() => {
    //     let count = 0;
    //     // const timerId = setInterval(() => {
    //     //     count += 1;
    //     //     console.log(count);
    //     // }, 1000);
    //     console.log("mount");
    //     return () => {
    //         console.log("unmount");
    //         // clearInterval(timerId);
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log("update");
    //     return () => {
    //         console.log("unmount update");
    //     };
    // });

    return (
        <div>
            <h4>ChildComponent</h4>
            {props.count}
        </div>
    );
};

const ChildList = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (props.onChangeList) {
            props.onChangeList(list);
        }
    }, [list]);

    const addItem = () => {
        const newList = [...list, Date.now()];

        setList(newList);

        if (props.onChangeList) {
            props.onChangeList(list);
        }
    };

    return (
        <div>
            <button onClick={addItem}>add</button>

            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export const SetStateSandbox = () => {
    const [toggle, changeToggle] = useToggle();
    const [, forceRender] = useToggle();
    const [state, setState] = useState(10);

    const fn1 = (name) => `Hello, ${name}`;

    return (
        <div>
            <h2>SetStateSandbox</h2>

            <button onClick={() => {}}>+ {fn1("test")}</button>

            <ChildList
                onChangeList={(list) => {
                    console.log(list);
                }}
            />

            <button
                onClick={() => {
                    setState(state + 1);
                }}
            >
                setState
            </button>
            <button onClick={changeToggle}>changeToggle</button>
            <button onClick={forceRender}>forceRender</button>

            {toggle && <ChildComponent count={state} />}
        </div>
    );
};
