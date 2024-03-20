import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png'; // Sørg for at stien til dit billede er korrekt

const Skills = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');
    const [mustHaveSkills, setMustHaveSkills] = useState(Array(3).fill(''));
    const [industryKnowledge, setIndustryKnowledge] = useState(Array(3).fill(''));

    const itSkillsOptions = ["JavaScript", "Python", "Java", "C#", "C++", "PHP"];
    const industryKnowledgeOptions = ["Biotech/Medtech", "Construction", "Design and Furniture Industry", "Energy", "IT & Communication", "Agriculture", "Maritime", "Transport", "Logistics", "Financial Sector"];
    const categoryOptions = ["Cloud Computing", "Business Intelligence", "Salesforce Cloud", "Cyber Security", "Coding", "Software Development", "UI/UX Design", "Data Management"];

    const handleNext = () => {
        navigate('/candidate-profile'); // Navigerer til CandidateProfile viewet
    };

    const handleBack = () => {
        navigate('/experience');
    };

    const renderSkillSelect = (skills, setSkills, options, label) => (
        <Grid container spacing={2}>
            {skills.map((skill, index) => (
                <Grid item xs={12} key={index}>
                    <FormControl fullWidth>
                        <InputLabel>{`${label} ${index + 1}`}</InputLabel>
                        <Select
                            value={skill}
                            label={`${label} ${index + 1}`}
                            onChange={(e) => {
                                const newSkills = [...skills];
                                newSkills[index] = e.target.value;
                                setSkills(newSkills);
                            }}
                        >
                            {options.map((option, idx) => (
                                <MenuItem key={idx} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    );

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
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categoryOptions.map((option, idx) => (
                            <MenuItem key={idx} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Typography variant="h6" sx={{ mb: 2 }}>Must Have Skills</Typography>
                {renderSkillSelect(mustHaveSkills, setMustHaveSkills, itSkillsOptions, "Must Have Skill")}

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Industry Knowledge</Typography>
                {renderSkillSelect(industryKnowledge, setIndustryKnowledge, industryKnowledgeOptions, "Industry Knowledge")}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
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

export default Skills;
