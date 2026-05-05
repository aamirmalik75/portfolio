import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { tokens } from '../theme.js'
import CardComp from './Card.jsx'
import { titles, urls } from '../config/Projects.js'
import HotelImg from '../Assets/cover-hotel.svg'
import realEstateImg from '../Assets/cover-real-estate.svg'
import productivityImg from '../Assets/cover-productivity.svg'
import jobImg from '../Assets/cover-job.svg'
import socialImg from '../Assets/cover-social.svg'

const Projects = () => {
  const colors = tokens()
  const isNonMediumScreen = useMediaQuery("(min-width:900px)")
  const isNonMobileScreen = useMediaQuery("(min-width:600px)")

  const images = [
    HotelImg,
    realEstateImg,
    productivityImg,
    jobImg,
    socialImg,
  ]

  return (
    <div id='projects' style={{ width: isNonMobileScreen ? '80%' : '95%', margin: "0 auto", padding: isNonMediumScreen ? '1.5rem 0 3rem' : '1rem 0 3rem' }}>
      <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: isNonMediumScreen ? '2.4rem' : '1.8rem', color: colors.primary[100], margin: '0 auto', width: '100%' }}  >Featured <Typography sx={{ color: colors.greenAccent[500], fontSize: isNonMediumScreen ? '2.4rem' : '1.8rem', ml: '0.5rem' }} >Projects</Typography></Typography>
      <Box display='grid' gridTemplateColumns={`repeat(${isNonMediumScreen ? 3 : 1},1fr)`} gap='0.9rem' mt='1.2rem'>
        {
          titles.map((title, index) => (
            <CardComp key={index} title={title} customImg={images[index]} url={urls[index]} />
          ))
        }
      </Box>
    </div>
  )
}

export default Projects
