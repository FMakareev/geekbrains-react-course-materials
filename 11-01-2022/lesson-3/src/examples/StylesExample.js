import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles'


const CustomSlider = styled((props) => {

  return (<Slider
    componentsProps={{
      className: 'thumb',
    }}
    {...props}
  />)
})`
  color: chartreuse;
  
  :hover {
    color: blueviolet;
  }
  
  & .MuiSlider-track {
    height: 24px;
  }

  & .MuiSlider-thumb {
    border-radius: 8px;
  }
  
  & .thumb {
    border-radius: 16px;
  }
  
`

const CustomSliderWithTheme = styled(Slider)((props) => {
  return `
    color: ${props.theme.palette.error.dark};
    box-shadow: ${props.theme.shadows[10]};
  `
})


export const StylesExample = () => {
  return <div>
    <CustomSliderWithTheme defaultValue={30}/>
    <CustomSlider defaultValue={30}/>
    <Slider defaultValue={30}/>
    <Slider defaultValue={30}/>
  </div>
}
