// src/components/dashboard/Header.tsx

'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { logOut } from '@/firebase/firebase';

const Header = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleLogout = async () => {
        await logOut();
        // Yo'naltirish manzilini '/register' dan '/login' ga o'zgartiramiz
        router.push('/login');
    };

    if (isMobile) {
        return null;
    }

    return (
        <AppBar position="static" sx={{ bgcolor: '#1a1a2e', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#e0e0e0' }}>
                    Tour Planner
                </Typography>
                <Button color="inherit" onClick={handleLogout} sx={{ color: '#e0e0e0' }}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;