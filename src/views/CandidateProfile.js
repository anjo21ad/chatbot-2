import React, { useState } from 'react';
import { Box, Typography, Button, Slider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png'; // Sørg for at denne sti er korrekt

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
        navigate('/skills', { replace: true }); // Erstatter den aktuelle historikindgang
    };

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            padding: 3
        }}>
            <Typography variant="h4" sx={{ color: '#0A84FF', textAlign: 'center', mb: 3 }}>SpitzenKlasse</Typography>

            {Object.keys(attributes).map((key) => (
                <Stack key={key} direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Typography sx={{ width: '20%', textAlign: 'right' }}>{attributes[key][0]}</Typography>
                    <Slider
                        value={profile[key]}
                        onChange={(e, value) => setProfile({ ...profile, [key]: value })}
                        aria-labelledby="input-slider"
                        min={0}
                        max={100}
                        sx={{ mx: 2, flex: 1 }}
                    />
                    <Typography sx={{ width: '20%', textAlign: 'left' }}>{attributes[key][1]}</Typography>
                </Stack>
            ))}

            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 4 }}>
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/assignment-description')}>
                    Next
                </Button>
            </Stack>
        </Box>
    );
};

export default CandidateProfile;
