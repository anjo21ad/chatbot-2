// Transaktionskoder.js
import React from 'react';
import { Box, Button, Typography, ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import customTheme from '../config/theme'; 

const Transaktionskoder = () => (
  <ThemeProvider theme={customTheme}>
    <Box
      sx={{
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        p: 2,
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 5,
          textShadow: '0 0 8px #00e676',
        }}
      >
        Transaktionskoder
      </Typography>

      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        color="secondary"
        sx={{
          position: 'absolute',
          bottom: '10vh',
          left: 'calc(25% - 300px)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => window.history.back()}
      >
        Tilbage
      </Button>
      
      <Box
        sx={{
          width: { xs: '100%', sm: 400 },
          height: 600,
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <iframe
          src="https://www.stack-ai.com/internal_ui/fcdd1b2e-ae82-4686-99e8-81fc3f378d06/6ae16ee7-a6f2-49ff-bf15-a68cecde4035/6601a2762c69a90219979dd1"
          frameBorder="0"
          title="Chatbot"
          width="100%"
          height="100%"
          allow="microphone;"
          sx={{
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  </ThemeProvider>
);

export default Transaktionskoder;
