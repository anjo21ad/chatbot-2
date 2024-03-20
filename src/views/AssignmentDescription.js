import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import backgroundImage from '../assets/inno.png'; // Sørg for at denne sti er korrekt

const AssignmentDescription = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState('');

    const saveAssignment = async () => {
        if (!description.trim()) {
            alert('Please enter a description.'); // Overvej at bruge en mere brugervenlig alert, f.eks. en dialogboks fra MUI
            return;
        }

        const assignmentToSave = {
            description,
        };

        try {
            // Gem opgaven i databasen her
            console.log('Assignment saved successfully:', assignmentToSave);
            alert('Assignment saved successfully'); // Overvej at bruge en mere brugervenlig alert, f.eks. en dialogboks fra MUI
            navigate('/assignment-created'); // Navigerer til AssignmentCreated viewet
        } catch (error) {
            console.error('Error saving assignment:', error);
            alert('Error saving assignment'); // Overvej at bruge en mere brugervenlig alert, f.eks. en dialogboks fra MUI
        }
    };

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            padding: 3
        }}>
            <Typography variant="h4" sx={{ color: '#0A84FF', textAlign: 'center', mb: 3 }}>SpitzenKlasse</Typography>

            <TextField
                label="Description"
                multiline
                rows={4}
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 3 }}
            />

            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate('/candidate-profile')}>
                    Back
                </Button>
                <Button variant="contained" endIcon={<SaveIcon />} onClick={saveAssignment}>
                    Save
                </Button>
            </Stack>
        </Box>
    );
};

export default AssignmentDescription;
