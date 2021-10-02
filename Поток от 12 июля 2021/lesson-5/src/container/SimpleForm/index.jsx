import React from 'react';
import { useSimpleForm } from './hooks/useSimpleForm';
import {SimpleFormContext} from "./context";

export const SimpleForm = (props) => {
  const state = useSimpleForm();

  return (
    <div>
      <header>
        <h1>SimpleForm</h1>
      </header>
        <SimpleFormContext.Provider value={state}>
            {props.render &&
            typeof props.render === 'function' &&
            props.render(state)}

            {props.children &&
            typeof props.children === 'function' &&
            props.children(state)}
        </SimpleFormContext.Provider>

    </div>
  );
};
