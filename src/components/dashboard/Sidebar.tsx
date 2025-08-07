// src/components/dashboard/Sidebar.tsx

import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import TourIcon from '@mui/icons-material/Tour';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaymentIcon from '@mui/icons-material/Payment';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    if (isMobile) {
        return null;
    }

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <Box sx={{ width: 250, bgcolor: '#1a1a2e', color: '#e0e0e0', p: 2, height: '100vh', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <List>
                {/* Dashboard (Statistics) */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigate('/dashboard')}>
                        <ListItemIcon>
                            <BarChartIcon sx={{ color: '#e0e0e0' }} />
                        </ListItemIcon>
                        <ListItemText primary="Statistics" />
                    </ListItemButton>
                </ListItem>
                {/* Top Tours */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigate('/dashboard/toptours')}>
                        <ListItemIcon>
                            <TourIcon sx={{ color: '#e0e0e0' }} />
                        </ListItemIcon>
                        <ListItemText primary="Top Tours" />
                    </ListItemButton>
                </ListItem>
                {/* Favorite Tours */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigate('/dashboard/favorites')}>
                        <ListItemIcon>
                            <FavoriteIcon sx={{ color: '#e0e0e0' }} />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItemButton>
                </ListItem>
                {/* Payments */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigate('/dashboard/payments')}>
                        <ListItemIcon>
                            <PaymentIcon sx={{ color: '#e0e0e0' }} />
                        </ListItemIcon>
                        <ListItemText primary="Payments" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;