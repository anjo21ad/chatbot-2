import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Modal, Box, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateProjectScreen = () => {
    const [projectName, setProjectName] = useState('');
    const [region, setRegion] = useState('');
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/experience', { state: { projectName, region } });
    };

    const displayRegion = () => region === '' ? 'Select Timezone' : region;

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundSize: 'cover',
            padding: 3
        }}>
            <Typography variant="h4" sx={{ color: '#0A84FF', textAlign: 'center', mb: 3 }}>SpitzenKlasse</Typography>

            <TextField
                label="Assignment name"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
            />

            <Button variant="outlined" fullWidth sx={{ mb: 3 }} onClick={() => setIsPickerVisible(true)}>
                {displayRegion()}
            </Button>

            <Modal
                open={isPickerVisible}
                onClose={() => setIsPickerVisible(false)}
                aria-labelledby="region-modal-title"
                aria-describedby="region-modal-description"
            >
                <Box sx={modalStyle}>
                    <FormControl fullWidth>
                        <InputLabel id="region-modal-label">Region</InputLabel>
                        <Select
                            labelId="region-modal-label"
                            value={region}
                            label="Region"
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <MenuItem value="Europe">Europe (CET)</MenuItem>
                            <MenuItem value="USA">USA (GMT)</MenuItem>
                            <MenuItem value="Asian">Asia (UTC)</MenuItem>
                            <MenuItem value="Domestic">Domestic</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{ mt: 2 }} variant="contained" onClick={() => setIsPickerVisible(false)}>Done</Button>
                </Box>
            </Modal>

            <Box sx={{ position: 'absolute', right: 20, bottom: 20 }}>
                <Button variant="contained" onClick={handleNext}>
                    <ArrowForwardIcon />
                </Button>
            </Box>
        </Box>
    );
};

export default CreateProjectScreen;