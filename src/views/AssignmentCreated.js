import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import backgroundImage from '../assets/inno.png'; // Sørg for at denne sti er korrekt

const AssignmentCreated = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3
        }}>
            <Typography variant="h4" sx={{ color: '#0A84FF', textAlign: 'center', mb: 3 }}>SpitzenKlasse</Typography>
            <Typography variant="h6" sx={{ color: '#0A84FF', textAlign: 'center', mb: 3 }}>
                Thanks for creating an assignment. In the next 24 hours, you will receive recommended CV's.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate('/assignment-description')}>
                    Back
                </Button>
                <Button variant="contained" endIcon={<ListIcon />} onClick={() => navigate('/cv-list')}>
                    View CV List
                </Button>
            </Stack>
        </Box>
    );
};

export default AssignmentCreated;
