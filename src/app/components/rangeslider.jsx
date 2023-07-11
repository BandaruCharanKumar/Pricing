import React, { useState } from 'react';
import { Slider } from '@mui/material';
import Users from './users';


const RangeSlider = ({onChange}) => {
    const [value, setValue] = useState(10);
  
    const handleSliderChange = (event, newValue) => {
      setValue(event.target.value);
     onChange(event.target.value)
    };
    
  
    return (
      <>
       <Users users={value}/>
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={0}
        max={10}
        step={null}
        marks={[
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 5 },
          { value: 8 },
          { value: 10 }
        ]}
        style = {{color:'#40ccb3',width: '300px',height: '4px'}}
      />
      </>
    );
  }; 
  
  export default RangeSlider;
  





