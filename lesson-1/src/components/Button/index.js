import React from 'react';


export const Button = ({icon, label}) => {
  return (
    <button className="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Share">
      {icon}
      <span>{label}</span>
    </button>
  );
};