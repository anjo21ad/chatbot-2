import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Icon for salary details
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // Icon for bonuses
import AssessmentIcon from '@mui/icons-material/Assessment'; // Icon for salary review

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676', // Green color for primary
    },
    secondary: {
      main: '#76ff03', // Lighter green color for secondary
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 8px 25px rgba(0, 230, 118, 0.5)', // Green shadow
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
  },
});

const Home = () => {
  const navigate = useNavigate();

  const salaryActions = [
    { title: 'Overenskomst for lærere', icon: <AccountBalanceWalletIcon />, path: '/overenskomst-for-lærere' },
    { title: 'Bonusordninger', icon: <MonetizationOnIcon />, path: '/bonuses' },
    { title: 'Lønreview', icon: <AssessmentIcon />, path: '/salary-review' },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          height: '100vh',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212', // Dark grey background color
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: '#ffffff', // White text color
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 3,
            textShadow: '0 0 8px #00e676', // Neon green text shadow for the glow effect
          }}
        >
          Payroll Bot
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {salaryActions.map((action, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      {action.icon}
                      {action.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(action.path)}
                      sx={{
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      Udforsk
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
