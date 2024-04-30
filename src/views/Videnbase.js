import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider, ThemeProvider, Grid, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import customTheme from '../config/theme';

// Define the ranking icons and documents array outside the component for better readability
const rankings = ['💩', '🐌', '🌱', '🚶‍♂️', '🚴‍♂️', '🏃‍♂️', '🚗', '🚀', '🌟', '🧙🏻‍♂️'];
const documents = [
  { name: 'Overenskomst for lærere.pdf', uploader: 'Anton (NLV)', uploads: 1 },
  { name: 'Transaktionskoder.pdf', uploader: 'Anton (NLV)', uploads: 1 },
];

const Videnbase = () => {
  const navigate = useNavigate();

  // Count the number of unique uploads for each uploader
  const uploadCounts = {};
  documents.forEach(doc => {
    if (!uploadCounts[doc.uploader]) {
      uploadCounts[doc.uploader] = 0;
    }
    uploadCounts[doc.uploader]++;
  });

  // Create an array of uploaders with their respective upload counts
  const rankedUploaders = Object.keys(uploadCounts).map(uploader => ({
    uploader,
    uploads: uploadCounts[uploader],
  }));

  // Sort the uploaders based on their upload counts in descending order
  rankedUploaders.sort((a, b) => b.uploads - a.uploads);

  // Find the index of Anton (NLV) in the sorted array
  const antonIndex = rankedUploaders.findIndex(uploader => uploader.uploader === 'Anton (NLV)');

  // Set Anton's ranking to 2 if he exists and has uploaded 2 documents, else keep it as is
  if (antonIndex !== -1 && rankedUploaders[antonIndex].uploads === 2) {
    rankedUploaders[antonIndex].ranking = 2;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          p: 4,
          backgroundColor: customTheme.palette.background.default,
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
          Dokumentoversigt og Ranking
        </Typography>

        <Box my={5}>
          <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            {rankings.map((rank, index) => (
              <Typography key={index} sx={{ mx: 1 }}>
                {`Rank ${index + 1}: ${rank}`}
              </Typography>
            ))}
          </Paper>
        </Box>

        <Grid container spacing={8} sx={{ flexGrow: 1, marginBottom: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
              <Typography variant="h6">Dokumenter</Typography>
              <Divider sx={{ my: 1 }} />
              <List sx={{ overflow: 'auto' }}>
                {documents.map((doc, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText primary={doc.name} secondary={`Uploaded by: ${doc.uploader}`} />
                    </ListItem>
                    {index < documents.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              <Button
                startIcon={<UploadFileIcon />}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => window.open('https://kmddk.sharepoint.com/:f:/t/KMDPayrollPrivate-365/Ep4fDl6FzwFHnkiRuN4WvpIBOK3l0ja3mn4kGXXyEkeh2w?e=nJoC9h')}
              >
                Upload Dokument
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6">Scoreboard</Typography>
              <Divider sx={{ my: 1 }} />
              <List sx={{ overflow: 'auto' }}>
                {rankedUploaders.map((uploader, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${uploader.uploader} ${uploader.ranking === 2 ? '🐌' : ''}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="secondary"
          sx={{
            position: 'fixed',
            bottom: 20,
            left: '10%',
            transform: 'scale(1)',
            '&:hover': { transform: 'scale(1.05)' },
          }}
          onClick={() => navigate(-1)}
        >
          Tilbage
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Videnbase;
