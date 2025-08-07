// src/components/InputForm.tsx

"use client";

import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Grid,
  styled,
  keyframes
} from '@mui/material';

import { useRouter } from 'next/navigation'; // <-- useRouter import qilindi

// Chegaraning aylanuvchi animatsiyasi
const draw = keyframes`
  to {
    stroke-dashoffset: -480;
  }
`;

// Forma konteyneri
const FormBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

// Input maydonlari uchun stillar
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#e0e0e0',
  },
}));

// Select maydoni uchun stillar
const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-select': {
    color: '#e0e0e0',
  },
}));

// Tugma uchun alohida stil
const AnimatedButton = styled(Button)(({ theme }) => ({
  width: '180px', // Tugma kengligini kichraytirdik
  height: '60px', // Tugma balandligini kichraytirdik
  background: 'transparent',
  border: '1px solid #91C9FF',
  color: 'white',
  position: 'relative',
  transition: '1s ease-in-out',
  zIndex: 1,

  '&:hover': {
    background: '#4F95DA',
    border: '1px solid #4F95DA',
  },

  '& svg': {
    position: 'absolute',
    top: 0,
    left: 0,
    fill: 'none',
    stroke: '#fff',
    strokeDasharray: '150 480',
    strokeDashoffset: '150',
    transition: '1s ease-in-out',
  },
  
  '&:hover svg': {
    strokeDashoffset: '-480',
  }
}));

export default function InputForm() {
  const [people, setPeople] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');

  const router = useRouter(); // useRouter hook'i

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forma ma'lumotlari:", { people, duration, budget });
    // Ma'lumotlarni saqlab, ro'yxatdan o'tish sahifasiga yo'naltiramiz
    localStorage.setItem('tourDetails', JSON.stringify({ people, duration, budget }));
    router.push('/register'); // <-- /register sahifasiga yo'naltiriladi
  };

  return (
    <Container maxWidth="md" sx={{ mt: { xs: 4, sm: 8 }, mb: { xs: 4, sm: 8 } }}>
      <FormBox 
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Plan Your Samarkand Trip
        </Typography>

        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4}>
            <StyledTextField
              label="Number of people"
              type="number"
              variant="filled"
              fullWidth
              required
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <StyledTextField
              label="Trip duration (days)"
              type="number"
              variant="filled"
              fullWidth
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required variant="filled">
              <InputLabel>Budget range</InputLabel>
              <StyledSelect
                label="Budget range"
                value={budget}
                onChange={(e) => setBudget(e.target.value as string)}
              >
                <MenuItem value="low">Low (under $100)</MenuItem>
                <MenuItem value="medium">Medium ($100 - $500)</MenuItem>
                <MenuItem value="high">High (over $500)</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <AnimatedButton 
            variant="contained"
            size="large"
            type="submit" // Formani submit qilish uchun type="submit" kerak
          >
            <span>Create Tour</span>
            <svg>
              <rect x="0" y="0" fill="none" width="180" height="60"/>
            </svg>
          </AnimatedButton>
        </Box>
      </FormBox>
    </Container>
  );
}