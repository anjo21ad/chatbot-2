import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactMailIcon from '@mui/icons-material/ContactMail';
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
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.7)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
    },
  },
});

const CvList = () => {
    const navigate = useNavigate();
    const consultants = [
        { company: 'Mckinsey', status: 'Open', contact: 'Contact', percentage: 90, skills: '80%', price: '1200 DKK' },
        { company: 'IBM', status: 'Open', contact: 'Contact', percentage: 85, skills: '75%', price: '1150 DKK' },
        { company: 'Accenture', status: 'Open', contact: 'Contact', percentage: 80, skills: '70%', price: '900 DKK' },
        { company: 'Deloitte', status: 'Open', contact: 'Contact', percentage: 75, skills: '65%', price: '1050 DKK' },
        { company: 'PwC', status: 'Open', contact: 'Contact', percentage: 70, skills: '60%', price: '650 DKK' },
        { company: 'KPMG', status: 'Open', contact: 'Contact', percentage: 65, skills: '55%', price: '450 DKK' },
        { company: 'EY', status: 'Open', contact: 'Contact', percentage: 60, skills: '50%', price: '600 DKK' },
        { company: 'Bain & Company', status: 'Open', contact: 'Contact', percentage: 55, skills: '45%', price: '850 DKK' },
        { company: 'BCG', status: 'Open', contact: 'Contact', percentage: 50, skills: '40%', price: '800 DKK' },
        // Flere konsulenter efter behov...
    ];

    const getSkillsColor = (percentage) => {
        if (percentage > 70) return 'success.main';
        if (percentage > 40) return 'warning.main';
        return 'error.main';
    };

    const handleBack = () => {
        navigate('/assignment-created');
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                backgroundSize: 'cover',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: customTheme.palette.primary.contrastText, fontWeight: 'bold', mb: 4 }}>
                    SpitzenKlasse
                </Typography>

                <TableContainer component={Paper} sx={{ maxWidth: 900, boxShadow: 3, background: 'linear-gradient(145deg, #2a2a2a, #383838)' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: customTheme.palette.primary.contrastText }}>Firm</TableCell>
                                <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText }}>CV</TableCell>
                                <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText }}>Contact</TableCell>
                                <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText }}>Profile</TableCell>
                                <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText }}>Skills</TableCell>
                                <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText }}>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {consultants.map((row, index) => (
                                <TableRow key={index} hover>
                                    <TableCell component="th" scope="row" sx={{ color: customTheme.palette.primary.contrastText, fontWeight: 'medium' }}>
                                        {row.company}
                                    </TableCell>
                                    <TableCell align="center" sx={{ cursor: 'pointer' }} onClick={() => navigate('/cv-show', { state: { consultant: row } })}>
                                        <ListAltIcon sx={{ color: customTheme.palette.primary.main }} />
                                    </TableCell>
                                    <TableCell align="center" sx={{ cursor: 'pointer' }} onClick={() => navigate('/contact-screen', { state: { consultant: row } })}>
                                        <ContactMailIcon sx={{ color: customTheme.palette.primary.main }} />
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: getSkillsColor(row.percentage) }}>
                                        {`${row.percentage}%`}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: getSkillsColor(parseInt(row.skills.replace('%', ''))) }}>
                                        {row.skills}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: customTheme.palette.primary.contrastText, fontWeight: 'medium' }}>
                                        {row.price}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={handleBack}
                    sx={{
                        mt: 2, // Adding margin top to separate the button from the table
                        alignSelf: 'flex-start', // Adjusting self alignment to flex-start to keep it on the left side
                        borderColor: customTheme.palette.primary.main, // Making the border color consistent with the theme
                        color: customTheme.palette.primary.contrastText, // Making the text color consistent with the theme
                    }}
                >
                    Back
                </Button>
            </Box>
        </ThemeProvider>
    );
};

export default CvList;
