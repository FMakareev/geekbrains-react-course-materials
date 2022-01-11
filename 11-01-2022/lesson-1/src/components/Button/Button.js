import React from 'react';
import styles from './Button.module.css';

export const Button = (props) => {

  return (<button
    className={[
      styles.reset,
      props.color === 'primary' ? styles.primary: '',
      props.color === 'alert' ? styles.alert: '',
    ].join(' ')}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children ? props.children : 'default' }
  </button>)
}
