import React from 'react';



export const CardContent = ({children}) => {
  return (
    <div className='card-v10__content-wrapper'>
      <div className='card-v10__content bg shadow-xs radius-lg'>
        {children}
      </div>
    </div>
  );
};