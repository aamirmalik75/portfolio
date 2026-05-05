import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { tokens } from '../theme'

const Navbar = () => {
  const colors = tokens();
  const isNonMediumScreen = useMediaQuery("(min-width:900px)")
  const [collapse, setCollapse] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <Box
      display='flex'
      flexDirection={(!isNonMediumScreen && collapse) ? 'column' : 'row'}
      width='100%'
      alignItems='center'
      justifyContent='space-between'
      position='fixed'
      top='0'
      left='0'
      zIndex={100}
      padding={isNonMediumScreen ? "1rem 9%" : '1rem'}
      sx={{
        backgroundColor: 'rgba(57, 62, 70, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${colors.primary[400]}`,
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between' width={!isNonMediumScreen && '100%'} >
        <Box>
          <a href='#home' style={{ color: colors.primary[100], fontSize: '2rem', fontWeight: '700', textDecoration: 'none', letterSpacing: '0.03em' }}>Portfolio</a>
        </Box>
        {
          isNonMediumScreen ? null : <i className={`fa-solid fa-${collapse ? "xmark" : "bars"}`} style={{ color: colors.primary[100], fontSize: '1rem', cursor: 'pointer' }} onClick={() => setCollapse(!collapse)} ></i>
        }
      </Box>
      {
        (isNonMediumScreen || collapse) &&
        <Box display='grid' gridTemplateColumns={`repeat(${isNonMediumScreen ? navItems.length : 1},auto)`} width={isNonMediumScreen ? null : '100%'} gap={isNonMediumScreen ? '2rem' : '1rem'} sx={{ color: colors.primary[100], zIndex: 120 }} >
          {navItems.map((item) => (
            <Box key={item.href} margin={!isNonMediumScreen && '0 auto'} >
              <a onClick={() => setCollapse(false)} className='nav-link' style={{ fontSize: '1.05rem' }} href={item.href}>
                {item.label}
              </a>
            </Box>
          ))}
        </Box>
      }
    </Box>
  )
}

export default Navbar
