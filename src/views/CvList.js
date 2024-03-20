import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import backgroundImage from '../assets/inno.png'; // Sørg for at denne sti er korrekt

const CvList = () => {
    const navigate = useNavigate();
    const consultants = [
        { company: 'Mckinsey', status: 'Open', contact: 'Contact', percentage: 90, skills: '80%', price: '1200 DKK' },
        { company: 'IBM', status: 'Open', contact: 'Contact', percentage: 85, skills: '75%', price: '1150 DKK' },
        { company: 'Rambøll', status: 'Open', contact: 'Contact', percentage: 83, skills: '70%', price: '1100 DKK' },
        { company: 'Deloitte', status: 'Open', contact: 'Contact', percentage: 78, skills: '65%', price: '1050 DKK' },
        { company: 'PWC', status: 'Open', contact: 'Contact', percentage: 75, skills: '60%', price: '1000 DKK' },
        { company: 'KMD', status: 'Open', contact: 'Contact', percentage: 69, skills: '55%', price: '950 DKK' },
        { company: 'CGI', status: 'Open', contact: 'Contact', percentage: 65, skills: '50%', price: '900 DKK' },
    ];

    // Funktion til at bestemme farven baseret på procentdelen
    const getSkillsColor = (percentage) => {
        if (percentage > 70) return 'success.main';
        if (percentage > 40) return 'warning.main';
        return 'error.main';
    };

    const handleBack = () => {
        navigate('/assignment-created'); // Opdater stien efter behov
    };

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#0A84FF', textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
                SpitzenKlasse
            </Typography>

            <TableContainer component={Paper} sx={{ maxWidth: 900, boxShadow: 3 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Firm</TableCell>
                            <TableCell align="center">CV</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Profile</TableCell>
                            <TableCell align="center">Skills</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultants.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                                    {row.company}
                                </TableCell>
                                <TableCell align="center" sx={{ cursor: 'pointer' }} onClick={() => navigate('/cv-show', { state: { consultant: row } })}>
                                    <ListAltIcon color="primary" />
                                </TableCell>
                                <TableCell align="center" sx={{ cursor: 'pointer' }} onClick={() => navigate('/contact-screen', { state: { consultant: row } })}>
                                    <ContactMailIcon color="primary" />
                                </TableCell>
                                <TableCell align="center" sx={{ color: getSkillsColor(row.percentage) }}>
                                    {`${row.percentage}%`}
                                </TableCell>
                                <TableCell align="center" sx={{ color: getSkillsColor(parseInt(row.skills.replace('%', ''))) }}>
                                    {row.skills}
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'medium' }}>
                                    {row.price}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
                sx={{
                    position: 'absolute',
                    left: 20,
                    bottom: 20,
                }}
            >
                Back
            </Button>
        </Box>
    );
};

export default CvList;
