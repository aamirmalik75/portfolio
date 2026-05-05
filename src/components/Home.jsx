import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import myImage from '../Assets/me.png'

const Home = () => {
  const colors = tokens()
  const isNonMediumScreen = useMediaQuery("(min-width:900px)")
  const isNonMobileScreen = useMediaQuery("(min-width:600px)")

  return (
    <div id='home' style={{ minHeight: isNonMobileScreen? 'calc(100vh - 64px)': '70vh', width: isNonMobileScreen ? '80%' : '100%', margin: '1rem auto', marginTop: !isNonMediumScreen ? '5rem' : '1rem', display: 'flex', flexDirection: isNonMediumScreen ? 'row' : 'column-reverse', alignItems: 'center', justifyContent: 'space-between', gap: '1.2rem', padding: isNonMediumScreen ? '3rem 6% 1.5rem' : '2rem 1rem 1rem' }}  >
      <Box width={isNonMobileScreen ? undefined : '100%'} textAlign={isNonMobileScreen ? undefined : 'center'} >
        <Typography variant='h2' sx={{ color: colors.primary[200], fontSize: isNonMediumScreen ? '1.4rem' : '1.1rem' }}>Hello, I&apos;m</Typography>
        <Typography variant='h1' sx={{ color: colors.primary[100], fontWeight: 700, fontSize: isNonMediumScreen ? '3rem' : '2rem', lineHeight: 1.15 }} >Aamir Maqsood</Typography>
        <Typography variant='h2' sx={{ color: colors.primary[200], display: 'flex', alignItems: 'center', flexDirection: isNonMobileScreen ? 'row' : 'column', justifyContent: isNonMobileScreen ? undefined : 'center', fontSize: isNonMediumScreen ? '1.5rem' : '1.2rem', mt: '0.4rem' }} >I build
          <Typography component='span' variant='h2' sx={{ color: colors.greenAccent[500], ml: isNonMobileScreen ? '0.6rem' : 0, fontWeight: 600, fontSize: isNonMediumScreen ? '1.6rem' : '1.3rem' }} >full stack products</Typography>
        </Typography>
        <Typography variant='h6' sx={{ color: colors.primary[200], maxWidth: '38rem', mt: '1rem', lineHeight: 1.8, mx: isNonMobileScreen ? undefined : 'auto' }} >
          I focus on crafting fast, scalable, and user-friendly web experiences with modern JavaScript frameworks and backend technologies.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isNonMediumScreen ? undefined : 'center', mt: '1.3rem', gap: '1rem' }} >
          <a style={{ textDecoration: 'none' }} href='https://github.com/aamirmalik75?tab=repositories' target='_blank' rel='noreferrer' aria-label='Github profile'>
            <i className="fa-brands fa-github social-icon" style={{ color: colors.greenAccent[500] }}></i>
          </a>
          <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn profile'>
            <i className="fa-brands fa-linkedin social-icon" style={{ color: colors.greenAccent[500] }}></i>
          </a>
          <a style={{ textDecoration: 'none' }} href='#projects'>
            <button className='cta-btn'>View Projects</button>
          </a>
        </Box>
      </Box>
      <Box width={isNonMediumScreen ? '45%' : '85%'} textAlign='center'>
        <img src={myImage} alt="Aamir Maqsood portrait" style={{ width: isNonMediumScreen ? '22rem' : '15rem', maxWidth: '100%', borderRadius: '1rem', border: `2px solid ${colors.primary[400]}`, boxShadow: `0 12px 36px ${colors.primary[800]}` }} />
      </Box>
    </div >
  )
}

export default Home
