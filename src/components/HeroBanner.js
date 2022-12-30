import React from 'react';

import {Box,Stack,Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner=()=> {
  return (


    <Box sx={{
      mt:{sm:'212px',xs:'70px'},
      ml:{sm:'50ppx'}}} 
      position="relative" p="20px">

      <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700}
      sx={{fontSize:{lg:'44px',xs:'40px'}}}
      mb="23" mt="30">
       Sweat, Smile <br/> and Repeat
      </Typography>

      <Typography fontSize="22px"
      lineHeight="35px" mb={3}> 
      check out the most effective exercises
      </Typography>

      <Button variant="contained" color="error" href='#exercises'
      xs={{backgroundColor:"FF2526",
      padding:'10px'}}>
      Explore Exercises
      </Button>

      <Typography fontWeight={600} color="#FF2625"
      sx={{
        opacity:'0.1',
        display:{lg:'block',xs:'none'},
        fontSize:'200px'
      }}>
      Exercise
      </Typography>
    <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner