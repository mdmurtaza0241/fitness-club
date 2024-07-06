import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm : '50px'}
        }} position="relative" p="20px">
            
            <Typography color="#0000c2" fontWeight="600" fontSize="26px">Fitness Club</Typography>
       <Typography fontWeight={700} color="#000074" fontStyle="italic" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Your Health Is An Investment,<br />
      Not An Expense.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={8}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Button variant="contained" color="primary" href="#exercises">Explore Exercises</Button>
    <Typography fontWeight={600} color="#000074" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
            
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
  )
}

export default HeroBanner