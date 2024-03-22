import React, { useState } from 'react';
import { Box, Typography, Button, Slider, Stack, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png';

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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          boxShadow: '0px 4px 15px rgba(245, 0, 87, 0.4)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-thumb': {
            backgroundColor: '#f50057',
            '&:hover': {
              boxShadow: '0px 0px 0px 8px rgba(245, 0, 87, 0.16)',
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#2196f3',
          },
          '& .MuiSlider-rail': {
            opacity: 0.5,
            backgroundColor: '#bfbfbf',
          },
        },
      },
    },
  },
});

const CandidateProfile = () => {
  const navigate = useNavigate();

  const initialProfileValues = {
    followerOrLeader: 50,
    analyticOrCreative: 50,
    practicalOrVisionary: 50,
    independentOrTeamPlayer: 50,
    patientOrImpulsive: 50,
    structuredOrFlexible: 50,
    introvertOrExtrovert: 50,
    detailedOrBigPicture: 50,
    architectOrDeveloper: 50,
    iProfileOrTProfile: 50,
    participantOrAgileFacilitator: 50,
    specialistOrGeneralist: 50,
  };

  const [profile, setProfile] = useState(initialProfileValues);

  const attributes = {
        followerOrLeader: ['Follower', 'Leader'],
        analyticOrCreative: ['Analytic', 'Creative'],
        practicalOrVisionary: ['Practical', 'Visionary'],
        independentOrTeamPlayer: ['Independent', 'Team Player'],
        patientOrImpulsive: ['Patient', 'Impulsive'],
        structuredOrFlexible: ['Structured', 'Flexible'],
        introvertOrExtrovert: ['Introvert', 'Extrovert'],
        detailedOrBigPicture: ['Detailed', 'Big Picture'],
        architectOrDeveloper: ['Architect', 'Developer'],
        iProfileOrTProfile: ['I Profile', 'T Profile'],
        participantOrAgileFacilitator: ['Participant', 'Agile Facilitator'],
        specialistOrGeneralist: ['Specialist', 'Generalist'],
  };

  const handleBack = () => {
    navigate('/skills', { replace: true });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Paper elevation={6} sx={{ p: 4, maxWidth: '600px', width: '90%', borderRadius: '15px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(30, 30, 30, 0.8)' }}>
          <Typography variant="h4" sx={{ color: customTheme.palette.secondary.contrastText, textAlign: 'center', mb: 4 }}>
            Candidate Profile
          </Typography>

          {Object.keys(attributes).map((key) => (
            <Stack key={key} direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Typography sx={{ width: '20%', textAlign: 'right', fontSize: '0.875rem', color: customTheme.palette.secondary.contrastText }}>{attributes[key][0]}</Typography>
              <Slider
                value={profile[key]}
                onChange={(e, value) => setProfile({ ...profile, [key]: value })}
                aria-labelledby="input-slider"
                min={0}
                max={100}
                sx={{ mx: 2, flex: 1 }}
                marks={[{ value: 50, label: '' }]}
              />
              <Typography sx={{ width: '20%', textAlign: 'left', fontSize: '0.875rem', color: customTheme.palette.secondary.contrastText }}>{attributes[key][1]}</Typography>
            </Stack>
          ))}

          <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 4 }}>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ borderColor: customTheme.palette.primary.main, color: customTheme.palette.primary.contrastText }}>
              Back
            </Button>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/assignment-description')} sx={{ backgroundColor: customTheme.palette.primary.main, '&:hover': { backgroundColor: customTheme.palette.primary.dark } }}>
              Next
            </Button>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default CandidateProfile;
