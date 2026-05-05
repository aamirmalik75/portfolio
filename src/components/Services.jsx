import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { tokens } from '../theme.js'
import { icons, titles } from '../config/Services.js';
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';

const Services = () => {
  const colors = tokens()
  const isNonMediumScreen = useMediaQuery("(min-width:900px)")
  const isNonMobileScreen = useMediaQuery("(min-width:600px)")

  return (
    <div id='services' style={{ width: isNonMobileScreen ? '80%' : '95%', margin: "0 auto", padding: isNonMediumScreen ? '1.5rem 0' : '1rem 0' }} >
      <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: isNonMediumScreen ? '2.4rem' : '1.8rem', color: colors.primary[100], margin: '0 auto', width: '100%' }}  >My <Typography sx={{ color: colors.greenAccent[500], fontSize: isNonMediumScreen ? '2.4rem' : '1.8rem', ml: '0.5rem' }} >Stack</Typography></Typography>
      <Box display='grid' gridTemplateColumns={`repeat(${isNonMediumScreen ? 3 : 1},1fr)`} gap='0.9rem' mt='1.2rem'>
        {
          icons.map((icon, index) => (
            <Box key={index} display='flex' flexDirection='column' alignItems='center' sx={{ backgroundColor: colors.primary[400], borderRadius: '0.8rem', p: '1.3rem', transition: 'transform 200ms ease, box-shadow 200ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 8px 24px ${colors.primary[800]}` } }} >
              {icon === "DevicesSharpIcon" ? <DevicesSharpIcon style={{ color: colors.greenAccent[500], fontSize: '3rem' }} /> : <i className={icon} style={{ color: colors.greenAccent[500], fontSize: '3rem' }} ></i>}
              <Typography sx={{ fontSize: isNonMediumScreen ? '1.4rem' : '1.1rem', color: colors.primary[100], mt: '0.5rem', textAlign: 'center' }} >{titles[index]}</Typography>
            </Box>
          ))
        }
      </Box>
    </div>
  )
}

export default Services
