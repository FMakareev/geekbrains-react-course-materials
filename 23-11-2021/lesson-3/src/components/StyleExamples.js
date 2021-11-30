import React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import '../App.css';
import {darken} from "@mui/material";

const CustomizeSlider = styled((props) => {
  return <Slider
    componentsProps={{thumb: {
      className: 'thumb'
    }}}
    {...props}
  />
})`
  color: brown;
  
  :hover {
    color: chartreuse;
  }
  
  & .MuiSlider-thumb {
    border-radius: 8px;
  }
  & .thumb {
    border-radius: 16px;
  }
`

const CustomizeSliderWithTheme = styled((props) => {
  return <Slider
    componentsProps={{thumb: {
      className: 'thumb'
    }}}
    {...props}
  />
})(({theme}) => {
  return `
      color: ${theme.palette.primary.main};
  
  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
  
  `
})


export const StyleExamples = () => {
  return (
    <>
      <CustomizeSliderWithTheme defaultValue={30} />
      <CustomizeSlider defaultValue={30} />
      <Slider defaultValue={30} />
      <Slider defaultValue={30}
              componentsProps={{
        thumb: {className: 'thumb'}}
      } />
    </>
  );
};
