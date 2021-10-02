import React from 'react';
import {SimpleForm} from "../container/SimpleForm";
import {SimpleFormField} from "../container/SimpleForm/SimpleFormField";

export const SimpleFormContext = (props) => {
    return (
        <div>
            <SimpleForm
                render={(props) => {
                    return (
                        <div>
                            <SimpleFormField
                                name="username"
                                type="text"
                                placeholder="username"
                                render={(props) => <input {...props}/>}
                            />
                            <SimpleFormField
                                name="email"
                                type="email"
                                placeholder="email@email.com"
                                render={(props) => <input {...props}/>}
                            />
                            <button type="button" onClick={props.resetForm}>
                                resetForm
                            </button>
                        </div>
                    );
                }}
            />
        </div>
    );
};