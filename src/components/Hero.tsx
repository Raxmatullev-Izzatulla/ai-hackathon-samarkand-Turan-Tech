'use client';

import React from 'react';
import { Box, Typography, Button, styled, useMediaQuery, useTheme, Select, MenuItem, SelectChangeEvent, InputAdornment, IconButton, Popover, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format } from 'date-fns';

// Fon rasmi va overlay uchun stillar
const HeroSection = styled(Box)({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/05/18/96/42/1000_F_518964221_y9azX3MA0sCoC89Kvg8Y6dedXoUj7CmZ.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const ContentBox = styled(Box)({
  position: 'relative',
  zIndex: 1,
  maxWidth: '1000px',
  width: '100%',
  padding: '0 20px',
  marginTop: '-20vh',
});

// Qidiruv maydoni uchun umumiy stillar
const SearchBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '50px',
  padding: '8px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  border: '1px solid #e0e0e0',
  gap: '0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    borderRadius: '12px',
    padding: '12px',
    gap: '12px',
  }
}));

// Input komponentlari uchun umumiy stillar
const InputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  height: '48px',
  padding: '0 15px',
  color: 'gray',
  borderRight: '1px solid #e0e0e0',
  '&:last-child': {
    borderRight: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderRight: 'none',
    borderBottom: '1px solid #e0e0e0',
    '&:last-child': {
      borderBottom: 'none',
    },
    padding: '0 12px',
  },
}));

const CustomSelect = styled(Select)({
  width: '100%',
  '& .MuiSelect-select': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px !important',
    height: '100%',
    color: 'black',
  },
});

const CustomDatePicker = styled(DatePicker)({
  width: '100%',
  '& .MuiInputBase-root': {
    height: '100%',
    '& .MuiInputBase-input': {
      padding: '0px !important',
      color: 'black',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiButtonBase-root': {
      padding: '0 12px',
      color: 'black',
      '&:hover': {
        background: 'transparent',
      }
    }
  },
});

const GuestInput = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',
  '& .MuiInputBase-root': {
    width: '100%',
    height: '100%',
  },
});

const SearchButton = styled(Button)(({ theme }) => ({
  background: 'black',
  color: 'white',
  borderRadius: '50px',
  height: '56px',
  padding: '0 25px',
  fontWeight: 'bold',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#3A7ABF',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginTop: '0',
    borderRadius: '8px',
  },
}));

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [funding, setFunding] = React.useState('100');
    const [checkInDate, setCheckInDate] = React.useState(null);
    const [checkOutDate, setCheckOutDate] = React.useState(null);
    
    // Guests uchun yangi state
    const [adults, setAdults] = React.useState(2);
    const [children, setChildren] = React.useState(2);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const fundingOptions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <HeroSection>
                <Overlay />
                <ContentBox>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', mb: 2 }}>
                        Samarkand
                    </Typography>

                    <SearchBarContainer sx={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        {/* Funding select */}
                        <InputWrapper sx={{ width: isMobile ? '100%' : '120px' }}>
                            <CustomSelect value={funding} onChange={(e: SelectChangeEvent) => setFunding(e.target.value)} displayEmpty variant="standard" disableUnderline>
                                <MenuItem value="" disabled>
                                  <Box>
                                    <Typography variant="caption" sx={{ color: 'gray', display: 'block', lineHeight: 1 }}>Funding</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>$100+</Typography>
                                  </Box>
                                </MenuItem>
                                {fundingOptions.map((price) => (
                                    <MenuItem key={price} value={price}>
                                        <Box>
                                            <Typography variant="caption" sx={{ color: 'gray', display: 'block', lineHeight: 1 }}>Funding</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>${price}+</Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </CustomSelect>
                        </InputWrapper>

                        {/* Check-in DatePicker */}
                        <InputWrapper>
                            <CustomDatePicker
                                label={<Box><Typography variant="caption" sx={{ color: 'gray', display: 'block', lineHeight: 1 }}>Check In</Typography></Box>}
                                value={checkInDate}
                                onChange={(newValue) => setCheckInDate(newValue)}
                                format="dd MMMM yyyy"
                                slotProps={{
                                    textField: {
                                        variant: 'standard',
                                        fullWidth: true,
                                        InputProps: { disableUnderline: true },
                                    }
                                }}
                            />
                        </InputWrapper>

                        {/* Check-out DatePicker */}
                        <InputWrapper>
                            <CustomDatePicker
                                label={<Box><Typography variant="caption" sx={{ color: 'gray', display: 'block', lineHeight: 1 }}>Check Out</Typography></Box>}
                                value={checkOutDate}
                                onChange={(newValue) => setCheckOutDate(newValue)}
                                format="dd MMMM yyyy"
                                slotProps={{
                                    textField: {
                                        variant: 'standard',
                                        fullWidth: true,
                                        InputProps: { disableUnderline: true },
                                    }
                                }}
                            />
                        </InputWrapper>

                        {/* Guests select with Popover */}
                        <InputWrapper sx={{ borderRight: isMobile ? 'none' : '1px solid #e0e0e0', borderBottom: isMobile ? '1px solid #e0e0e0' : 'none' }}>
                            <GuestInput onClick={handleClick}>
                                <Typography variant="caption" sx={{ color: 'gray', lineHeight: 1 }}>Guests</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <PeopleIcon sx={{ color: 'black' }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{adults} adults, {children} children</Typography>
                                </Box>
                            </GuestInput>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                  sx: {
                                    borderRadius: '12px',
                                    p: 2,
                                  }
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '200px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography>Adults</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <IconButton onClick={() => setAdults(Math.max(0, adults - 1))} size="small">
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography>{adults}</Typography>
                                            <IconButton onClick={() => setAdults(adults + 1)} size="small">
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography>Children</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <IconButton onClick={() => setChildren(Math.max(0, children - 1))} size="small">
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography>{children}</Typography>
                                            <IconButton onClick={() => setChildren(children + 1)} size="small">
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Popover>
                        </InputWrapper>

                        {/* Search button */}
                        <SearchButton sx={{ borderRadius: '50px', height: '56px', ml: isMobile ? 0 : 1, mt: isMobile ? 1 : 0, width: isMobile ? '100%' : 'auto' }}>
                            <SearchIcon sx={{ mr: 1 }} />
                            Generator TOURS
                        </SearchButton>
                    </SearchBarContainer>
                </ContentBox>
            </HeroSection>
        </LocalizationProvider>
    );
};

export default Hero;