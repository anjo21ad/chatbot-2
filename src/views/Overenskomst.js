import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676', // Grøn farve for primær
    },
    secondary: {
      main: '#76ff03', // Lysere grøn farve for sekundær
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', // Mørkegrå baggrund
      paper: '#1e1e1e',
    },
  },
});

const Overenskomst = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: customTheme.palette.background.default,
        }}
      >
        {/* iframe for chatbot med bestemte dimensioner og centrering */}
        <iframe
          src="https://www.stack-ai.com/embed/fcdd1b2e-ae82-4686-99e8-81fc3f378d06/6ae16ee7-a6f2-49ff-bf15-a68cecde4035/6601a2762c69a90219979dd1"
          frameBorder="0"
          width="400" // Bredden af chatbotten
          height="600" // Højden af chatbotten
          allow="microphone;"
          title="Chatbot"
          style={{
            borderRadius: '10px', // Giver chatbotten afrundede hjørner
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tilføjer en let skygge for dybdeeffekt
          }}
        ></iframe>
      </Box>
    </ThemeProvider>
  );
};

export default Overenskomst;
