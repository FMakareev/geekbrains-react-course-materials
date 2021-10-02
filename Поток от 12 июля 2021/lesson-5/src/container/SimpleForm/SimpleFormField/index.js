import React, {useContext} from 'react';
import {SimpleFormContext} from "../context";


export const SimpleFormField = (props) => {

    const {setFieldValue, getFieldValue} = useContext(SimpleFormContext)

    return (
        <>
            {
                typeof props.render === 'function' && props.render({
                    value: getFieldValue(props.name),
                    onChange: (event) => {
                        setFieldValue(props.name, event.target.value)
                    },
                    ...props,
                })
            }
        </>
    );
};