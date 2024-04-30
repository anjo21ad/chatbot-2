// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, useMediaQuery, ThemeProvider } from '@mui/material';
import testLogo from '../assets/testLogo.png';
import customTheme from '../config/theme';

function Header() {
  const navigate = useNavigate();
  const matches = useMediaQuery(customTheme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: matches ? '10px 40px' : '5px 10px',
        background: customTheme.palette.background.paper,
        boxShadow: '0 2px 3px 1px rgba(0, 0, 0, .3)',
      }}>
        <Box role="button" onClick={() => navigate('/')} sx={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          '&:hover img': {
            boxShadow: '0 0 15px 3px rgba(255, 255, 255, 0.7)',
            transition: 'box-shadow 0.3s ease-in-out',
          },
        }}>
          <img src={testLogo} alt="Logo" style={{ height: '45px' }} />
        </Box>
        <Button 
          onClick={() => navigate('/videnbase')}
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'none',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          Videnbase
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
