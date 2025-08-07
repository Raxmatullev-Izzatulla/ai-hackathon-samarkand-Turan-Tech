// src/app/dashboard/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress, useMediaQuery, useTheme, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';

// Komponentlarni import qilish
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import BottomNav from '@/components/dashboard/BottomNav';

// Firebase importlari
import { auth, db, doc, getDoc } from '@/firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

export default function DashboardPage() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                try {
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log("User data not found in Firestore.");
                        setUserData(null);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setUserData(null);
                }
            } else {
                // Foydalanuvchi tizimdan chiqqan bo'lsa, login sahifasiga yo'naltiramiz
                router.push('/login');
            }
            // Ma'lumotlar yuklangandan keyin yoki topilmaganda, yuklashni tugatamiz
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    // Agar ma'lumotlar yuklanayotgan bo'lsa, CircularProgress ko'rsatamiz
    if (loading) {
        return (
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
                color: 'white'
            }}>
                <CircularProgress color="inherit" />
                <Typography variant="h5" sx={{ ml: 2 }}>Loading your personalized tour...</Typography>
            </Box>
        );
    }

    // Loader tugagandan so'ng asosiy sahifani ko'rsatamiz
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
        }}>
            <Header />
            <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: isMobile ? 'column' : 'row' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, color: 'white', pb: isMobile ? 8 : 3 }}>
                    <Container maxWidth="md">
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Hello, {userData ? userData.firstName : 'User'}!
                        </Typography>
                        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                            Your personalized tour details:
                        </Typography>
                        {userData ? (
                            <Box sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    **People:** {userData.people}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    **Duration:** {userData.duration} days
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    **Budget:** {userData.budget}
                                </Typography>
                                <Typography variant="body1">
                                    **Registration Date:** {new Date(userData.registrationDate).toLocaleDateString()}
                                </Typography>
                            </Box>
                        ) : (
                            <Alert severity="info" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                                Tour data not found. Please create a new tour on the Home page.
                            </Alert>
                        )}
                    </Container>
                </Box>
            </Box>
            <BottomNav />
        </Box>
    );
}