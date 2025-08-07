// src/app/register/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Stepper, Step, StepLabel, Paper, Grid, Link, styled, keyframes, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

// Firebase importlari
import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from '@/firebase/firebase';

// Chegaraning aylanuvchi animatsiyasi
const draw = keyframes`
  to {
    stroke-dashoffset: -480;
  }
`;

// Input maydonlari uchun stillar
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#e0e0e0',
  },
}));

// Tugma uchun alohida stil
const AnimatedButton = styled(Button)(({ theme }) => ({
  width: '240px',
  height: '60px',
  background: 'transparent',
  border: '1px solid #91C9FF',
  color: 'white',
  position: 'relative',
  transition: '1s ease-in-out',
  zIndex: 1,
  overflow: 'hidden',

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
  },
  '& span': {
    position: 'relative',
    zIndex: 2,
  }
}));

const steps = ['Tour Details', 'Personal Info', 'Create Account'];

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    tourDetails: {}, // Landing Page'dan keladigan ma'lumotlar uchun
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Loading holati
  const [error, setError] = useState(''); // Xato xabari
  const router = useRouter();

  useEffect(() => {
    // Sahifa yuklanganda localStorage'dan tourDetails'ni olamiz
    const savedTourDetails = localStorage.getItem('tourDetails');
    if (savedTourDetails) {
      setFormData((prevData) => ({
        ...prevData,
        tourDetails: JSON.parse(savedTourDetails),
      }));
    }
  }, []);

  const handleNext = () => {
    // Har bir bosqichda ma'lumotlarni tekshirish
    if (activeStep === 0 && (!formData.tourDetails.duration || !formData.tourDetails.people || !formData.tourDetails.budget)) {
      setError('Please go back to the home page and specify your tour details.');
      return;
    }
    if (activeStep === 1 && (!formData.firstName || !formData.lastName || !formData.email)) {
      setError('Please fill in all personal information fields.');
      return;
    }
    if (activeStep === 2 && (!formData.username || !formData.password)) {
      setError('Please create a username and password.');
      return;
    }
    setError(''); // Agar xato bo'lmasa, xato xabarini tozalaymiz
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setError(''); // Orqaga qaytganda xato xabarini tozalaymiz
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFinish = async () => {
    setLoading(true);
    setError('');
    try {
      // 1. Foydalanuvchini Firebase Authentication orqali ro'yxatdan o'tkazish
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // 2. Barcha ma'lumotlarni bitta obyektga birlashtiramiz
      const finalData = {
        userId: user.uid, // Foydalanuvchi ID'si
        ...formData.tourDetails,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        registrationDate: new Date().toISOString(),
      };
      
      // 3. Ma'lumotlarni Firestore'ga saqlash (parolsiz)
      // Parolni ma'lumotlar bazasiga saqlash xavfsizlik nuqtai nazaridan tavsiya etilmaydi
      await setDoc(doc(db, "users", user.uid), finalData);
      
      console.log('User registered and data saved to Firestore:', finalData);

      // localStorage'dagi vaqtinchalik ma'lumotlarni tozalash
      localStorage.removeItem('tourDetails');
      
      // Foydalanuvchini dashboard sahifasiga yo'naltiramiz
      router.push('/dashboard');

    } catch (firebaseError) {
      console.error('Registration error:', firebaseError);
      let errorMessage = 'An unexpected error occurred during registration.';
      if (firebaseError.code === 'auth/email-already-in-use') {
        errorMessage = 'This email address is already in use. Please use a different email or sign in.';
      } else if (firebaseError.code === 'auth/invalid-email') {
        errorMessage = 'The email address is not valid.';
      } else if (firebaseError.code === 'auth/weak-password') {
        errorMessage = 'The password is too weak. Please choose a stronger password.';
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Your planned tour details:
            </Typography>
            {formData.tourDetails.people && (
              <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 2 }}>
                People: {formData.tourDetails.people}
              </Typography>
            )}
            {formData.tourDetails.duration && (
              <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 2 }}>
                Duration: {formData.tourDetails.duration} days
              </Typography>
            )}
            {formData.tourDetails.budget && (
              <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 2 }}>
                Budget: {formData.tourDetails.budget}
              </Typography>
            )}
            {(!formData.tourDetails.duration || !formData.tourDetails.people || !formData.tourDetails.budget) && (
                <Typography variant="body2" sx={{ color: 'error.main', mt: 2 }}>
                    Please go back to the home page and specify your tour details.
                </Typography>
            )}
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Please provide your personal information.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  required
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  required
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  required
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Create your unique account.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your username and password will be used to log in.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  required
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        color: 'white',
      }}
    >
      <Container component="main" maxWidth="sm">
        <Paper 
          elevation={10} 
          sx={{ 
            p: { xs: 3, md: 6 }, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'white' }}>
            Create Your Tour Plan
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '100%', mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconProps={{ style: { color: 'white' } }} sx={{ '& .MuiStepLabel-label': { color: 'white' } }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 4 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1, color: 'white' }} disabled={loading}>
                Back
              </Button>
            )}
            <AnimatedButton
              onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
              disabled={loading}
            >
              <span>
                {loading ? <CircularProgress size={24} color="inherit" /> : (activeStep === steps.length - 1 ? 'Start building your tour' : 'Next')}
              </span>
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
            </AnimatedButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}