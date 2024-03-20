import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem, Slider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png';

const Experience = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [projectData, setProjectData] = useState({ projectName: location.state?.projectName || '' });
    const [demographyAndExperience, setDemographyAndExperience] = useState({
        contractStart: '',
        contractEnd: '',
        address: '',
        language: '',
        educationLevel: '',
        experience: '',
        wageRange: [100, 1000],
        urgency: '',
    });

    const handleNext = () => {
        const combinedData = { ...projectData, demographyAndExperience };
        navigate('/skills', { state: { combinedData } });
    };

    const handleBack = () => {
        navigate('/'); // Dette vil altid tage brugeren tilbage til CreateProject, uanset tidligere navigation
    };

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography variant="h4" sx={{ color: '#0A84FF', mb: 3, textAlign: 'center' }}>SpitzenKlasse</Typography>
            
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Grid container spacing={2}>
                    {Object.entries(demographyAndExperience).map(([key, value]) => (
                        <Grid item xs={12} key={key}>
                            <FormControl fullWidth variant="outlined">
                                {key === 'address' ? (
                                    <TextField
                                        label="Address"
                                        value={value}
                                        onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                                    />
                                ) : key === 'contractStart' || key === 'contractEnd' ? (
                                    <TextField
                                        type="date"
                                        label={key === 'contractStart' ? 'Contract Start' : 'Contract End'}
                                        value={value}
                                        onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                ) : key === 'wageRange' ? (
                                    <Box sx={{ padding: 2 }}>
                                        <Typography>Wage Range: {value[0]} - {value[1]} kr/hr</Typography>
                                        <Slider
                                            value={value}
                                            onChange={(e, newValue) => setDemographyAndExperience(prev => ({ ...prev, wageRange: newValue }))}
                                            valueLabelDisplay="auto"
                                            min={100}
                                            max={3000}
                                        />
                                    </Box>
                                ) : (
                                    <>
                                        <InputLabel id={`${key}-label`}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</InputLabel>
                                        <Select
                                            labelId={`${key}-label`}
                                            value={value}
                                            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                            onChange={(e) => setDemographyAndExperience(prev => ({ ...prev, [key]: e.target.value }))}
                                        >
                                            {key === 'language' && ['English', 'Danish', 'German'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                            {key === 'educationLevel' && ['Bachelor', 'Master', 'PhD'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                            {key === 'experience' && ['1-2 years', '3-5 years', '5+ years'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                            {key === 'urgency' && ['Low - 7 Days', 'Medium - 3 days', 'High - 24 Hours'].map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                                        </Select>
                                    </>
                                )}
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                        Back
                    </Button>
                    <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleNext}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Experience;