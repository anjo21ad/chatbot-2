import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useMediaQuery, ThemeProvider } from '@mui/material';
import testLogo from '../assets/testLogo.png'; // Husk at opdatere stien til logoet efter behov
import { createTheme } from '@mui/material/styles';

// Brug customTheme fra dit home view
const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function Header() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: matches ? '15px 30px' : '10px 20px',
        background: customTheme.palette.background.paper,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      }}>
        <Box onClick={navigateHome} sx={{
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center',
          '&:hover img': { // Tilføj hover-effekt på logoet for at forbedre interaktiviteten
            boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.7)', // Mere subtil og tiltalende grøn neon effekt
            transition: 'box-shadow 0.3s ease-in-out',
          },
        }}>
          <img src={testLogo} alt="Logo" style={{ 
            height: matches ? '60px' : '50px', 
            marginRight: '15px',
          }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
