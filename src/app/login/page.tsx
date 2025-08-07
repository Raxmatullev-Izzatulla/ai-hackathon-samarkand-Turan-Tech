// src/app/login/page.tsx

'use client';

import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Link, styled, CircularProgress, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

// Firebase importlari
import { auth, signInWithEmailAndPassword } from '@/firebase/firebase';

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


export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            
            // Foydalanuvchi muvaffaqiyatli kirsa, dashboardga yo'naltiramiz
            router.push('/dashboard');
            
        } catch (firebaseError) {
            console.error('Login error:', firebaseError);
            let errorMessage = 'An unexpected error occurred during login.';
            if (firebaseError.code === 'auth/invalid-email' || firebaseError.code === 'auth/user-not-found') {
                errorMessage = 'Invalid email or password.';
            } else if (firebaseError.code === 'auth/wrong-password') {
                errorMessage = 'Invalid email or password.';
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
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
                        Login to your Account
                    </Typography>

                    {error && (
                        <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                            {error}
                        </Typography>
                    )}

                    <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} sm={8}>
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
                            <Grid item xs={12} sm={8}>
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
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <AnimatedButton
                                onClick={handleLogin}
                                disabled={loading}
                            >
                                <span>
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
                                </span>
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                            </AnimatedButton>
                        </Box>
                    </Box>
                    {/* Bu qator o'zgartirildi */}
                    <Grid container justifyContent="center" sx={{ mt: 3 }}>
                        <Grid item>
                            <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                                Sayohatingizni rejalashtirish uchun ma'lumotlarni kiriting.
                            </Typography>
                            <Link href="/" variant="body2" sx={{ color: '#91c9ff', textDecoration: 'none', display: 'block', textAlign: 'center', mt: 1 }}>
                                Sayohat ma'lumotlarini kiritish
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}