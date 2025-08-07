'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useMediaQuery, useTheme, Select, MenuItem, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { auth, logOut } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Navbar uchun alohida stillar
const StyledAppBar = styled(AppBar)({
  background: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  // Padding qiymatini 2px ga kamaytirdik
  padding: '2px 0', 
});

const LogoText = styled(Typography)({
  fontWeight: 'bold',
  color: '#ffffff',
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
});

const NavLink = styled(Link)({
  color: '#ffffff',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 500,
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  '&:hover': {
    color: '#91C9FF',
  },
});

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const router = useRouter();
    const [language, setLanguage] = React.useState('uz');
    const [currency, setCurrency] = React.useState('usd');
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await logOut();
        router.push('/login');
    };

    const handleThemeToggle = () => {
      setDarkMode(!darkMode);
    };

    return (
        <StyledAppBar position="absolute">
            {/* Toolbar ichidagi minHeight qiymatini kamaytirish (ixtiyoriy) */}
            <Toolbar variant="dense" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Chap qism: Logo */}
                <Box>
                    <Link href="/" passHref>
                        <LogoText variant="h5">Tour-Sam</LogoText>
                    </Link>
                </Box>

                {/* O'rta qism: Menyular */}
                {!isMobile && (
                    <Box sx={{ 
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        display: 'flex', 
                        alignItems: 'center' 
                    }}>
                        <NavLink href="/tours">Tours</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/team">Team</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </Box>
                )}

                {/* O'ng qism: Boshqaruv elementlari */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Tilni o'zgartirish */}
                    <FormControl variant="outlined" size="small" sx={{ width: 80, mr: 1 }}>
                        <Select value={language} onChange={(e) => setLanguage(e.target.value)} sx={{ color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' } }}>
                            <MenuItem value="uz">UZ</MenuItem>
                            <MenuItem value="en">EN</MenuItem>
                            <MenuItem value="ru">RU</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Valyutani o'zgartirish */}
                    <FormControl variant="outlined" size="small" sx={{ width: 80, mr: 1 }}>
                        <Select value={currency} onChange={(e) => setCurrency(e.target.value)} sx={{ color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' } }}>
                            <MenuItem value="usd">USD</MenuItem>
                            <MenuItem value="eur">EUR</MenuItem>
                            <MenuItem value="uzs">UZS</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Kun/tun rejimini o'zgartirish */}
                    <IconButton onClick={handleThemeToggle} sx={{ color: 'white', mr: 1 }}>
                        {darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
                    </IconButton>

                    {/* Login/Logout tugmasi va Dashboard ikonkasi */}
                    {isAuthenticated ? (
                        <>
                            <IconButton onClick={() => router.push('/dashboard')} sx={{ color: 'white' }}>
                                <AccountCircleIcon />
                            </IconButton>
                            <Button onClick={handleLogout} sx={{ ml: 1, background: '#4F95DA', color: 'white', textTransform: 'none', fontWeight: 'bold', borderRadius: '20px', padding: '8px 20px', '&:hover': { background: '#3A7ABF' } }}>
                                <ExitToAppIcon sx={{ mr: 1 }} /> Logout
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => router.push('/login')} sx={{ ml: 1, background: '#4F95DA', color: 'white', textTransform: 'none', fontWeight: 'bold', borderRadius: '20px', padding: '8px 20px', '&:hover': { background: '#3A7ABF' } }}>
                            <Typography>Sign In</Typography>
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;