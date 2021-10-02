import React from 'react';
import {SimpleFormHOC} from "../container/SimpleForm/hoks";

const FormExample = (props) => {
    return <div>

        <input type="text" name="foo" value={props.getFieldValue('foo')} onChange={(event) => {
            props.setFieldValue('foo', event.target.value)
        }}/>

        <button type="button" onClick={props.resetForm}>
            resetForm
        </button>
    </div>;
}

const FormWithHoc = SimpleFormHOC(FormExample)

export const FormWithHOCExample = (props) => {
    return (
        <div>
            <h2>FormWithHOCExample</h2>
            <FormWithHoc/>
        </div>
    );
};