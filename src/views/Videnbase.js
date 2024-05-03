import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider, ThemeProvider, Grid, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import customTheme from '../config/theme';

// Define the documents array outside the component for better readability
const documents = [
  { name: 'Overenskomst for lærere.pdf', uploader: 'Anton (NLV)', uploads: 1 },
  { name: 'Transaktionskoder.pdf', uploader: 'Anton (NLV)', uploads: 1 },
];

const Videnbase = () => {
  const navigate = useNavigate();

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
          Dokumentoversigt
        </Typography>

        <Grid container spacing={8} sx={{ flexGrow: 1, marginBottom: 4 }}>
          <Grid item xs={12}>
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
