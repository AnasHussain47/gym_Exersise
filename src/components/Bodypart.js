import React from 'react';
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';

function Bodypart({item,setBodyPart,BodyPart}) {
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
            borderTop: BodyPart===item?'4px solid #ff2625':'',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        
        
    }}
    >

        <img src={Icon} alt='dumblle' style={{
            width:"40px",
            height:"40px"
        }}/>
    </Stack>
  )
}

export default Bodypart