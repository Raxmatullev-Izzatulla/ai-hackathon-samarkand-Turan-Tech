// src/components/dashboard/BottomNav.tsx

'use client';

import React, { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Paper, useMediaQuery, useTheme } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TourIcon from '@mui/icons-material/Tour';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { logOut } from '@/firebase/firebase';

const BottomNav = () => {
    const [value, setValue] = useState('dashboard');
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 'logout') {
            handleLogout();
        } else {
            router.push(`/dashboard/${newValue === 'dashboard' ? '' : newValue}`);
        }
    };

    const handleLogout = async () => {
        await logOut();
        // Yo'naltirish manzilini '/register' dan '/login' ga o'zgartiramiz
        router.push('/login');
    };

    if (!isMobile) {
        return null;
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
            <BottomNavigation showLabels value={value} onChange={handleChange} sx={{ bgcolor: '#1a1a2e' }}>
                <BottomNavigationAction 
                    label="Statistics" 
                    value="dashboard" 
                    icon={<BarChartIcon />} 
                    sx={{ color: '#e0e0e0', '&.Mui-selected': { color: '#4F95DA' } }}
                />
                <BottomNavigationAction 
                    label="Top Tours" 
                    value="toptours" 
                    icon={<TourIcon />} 
                    sx={{ color: '#e0e0e0', '&.Mui-selected': { color: '#4F95DA' } }}
                />
                <BottomNavigationAction 
                    label="Favorites" 
                    value="favorites" 
                    icon={<FavoriteIcon />} 
                    sx={{ color: '#e0e0e0', '&.Mui-selected': { color: '#4F95DA' } }}
                />
                <BottomNavigationAction 
                    label="Payments" 
                    value="payments" 
                    icon={<PaymentIcon />} 
                    sx={{ color: '#e0e0e0', '&.Mui-selected': { color: '#4F95DA' } }}
                />
                <BottomNavigationAction 
                    label="Logout" 
                    value="logout" 
                    icon={<ExitToAppIcon />} 
                    sx={{ color: '#e0e0e0', '&.Mui-selected': { color: '#4F95DA' } }}
                />
            </BottomNavigation>
        </Paper>
    );
};

export default BottomNav;