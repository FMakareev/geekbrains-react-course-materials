import React from 'react';
import {useWindowEvent} from "../../hooks/useWindowEvent";
import {useToggle} from "../../hooks/useToggle";


const ComponentWithEvent = () => {


  useWindowEvent('resize', () => {
    console.log('window 0');
  })

  return <div>
    ComponentWithEvent
  </div>
}

export const ExampleWindowEvent = (props) => {
  const [toggle, {onToggle}] = useToggle();
  return (
    <div>
      <button onClick={onToggle}>
        onToggle
      </button>

      {
        toggle ? <ComponentWithEvent/> : null
      }
    </div>
  );
};