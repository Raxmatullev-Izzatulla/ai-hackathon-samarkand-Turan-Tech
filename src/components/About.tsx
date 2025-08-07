'use client';

import React from 'react';
import { Box, Typography, styled, Container, Grid, Button, AvatarGroup, Avatar } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Main container for the about section
const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f9f9f9',
}));

// Container for the colored cards
const CardContainer = styled(Grid)({
  marginTop: '40px',
  marginBottom: '60px',
});

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '12px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

const CardContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const CardIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

// Bottom statistics section
const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

const StatsItem = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  '&:not(:last-child)': {
    borderRight: '1px solid #e0e0e0',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderRight: 'none !important',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: theme.spacing(3),
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

const UsersStats = styled(Box)({
  flex: 1.5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingRight: '20px',
});

const About = () => {
    return (
        <AboutSection>
            <Container>
                <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
                    About Us
                </Typography>

                <CardContainer container spacing={3}>
                    {/* Security Assurance Cards */}
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard sx={{ backgroundColor: '#e8f7fa' }}>
                            <CardContent>
                                <CardIcon sx={{ color: '#007bff' }}>
                                    <SecurityIcon />
                                </CardIcon>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Security Assurance
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Demonstrates commitment to user data security through encryption and secure payment practices
                                </Typography>
                            </CardContent>
                            <Button sx={{ alignSelf: 'center', textTransform: 'none', color: 'black' }} endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard sx={{ backgroundColor: '#fdeff7' }}>
                            <CardContent>
                                <CardIcon sx={{ color: '#ff69b4' }}>
                                    <LockIcon />
                                </CardIcon>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Security Assurance
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Demonstrates commitment to user data security through encryption and secure payment practices
                                </Typography>
                            </CardContent>
                            <Button sx={{ alignSelf: 'center', textTransform: 'none', color: 'black' }} endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard sx={{ backgroundColor: '#e9f5e9' }}>
                            <CardContent>
                                <CardIcon sx={{ color: '#28a745' }}>
                                    <PeopleIcon />
                                </CardIcon>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Security Assurance
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Demonstrates commitment to user data security through encryption and secure payment practices
                                </Typography>
                            </CardContent>
                            <Button sx={{ alignSelf: 'center', textTransform: 'none', color: 'black' }} endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledCard sx={{ backgroundColor: '#fcf4e8' }}>
                            <CardContent>
                                <CardIcon sx={{ color: '#ffc107' }}>
                                    <EmojiEventsIcon />
                                </CardIcon>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Security Assurance
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Demonstrates commitment to user data security through encryption and secure payment practices
                                </Typography>
                            </CardContent>
                            <Button sx={{ alignSelf: 'center', textTransform: 'none', color: 'black' }} endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </StyledCard>
                    </Grid>
                </CardContainer>

                {/* Bottom stats section */}
                <StatsContainer>
                    <UsersStats>
                        <AvatarGroup max={4} sx={{ mb: 1, '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                            <Avatar alt="Remy Sharp" src="/path/to/avatar1.jpg" />
                            <Avatar alt="Travis Howard" src="/path/to/avatar2.jpg" />
                            <Avatar alt="Cindy Baker" src="/path/to/avatar3.jpg" />
                            <Avatar alt="Agnes Walker" src="/path/to/avatar4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/path/to/avatar5.jpg" />
                        </AvatarGroup>
                        <Typography variant="body2" sx={{ color: 'gray' }}>
                            1684 people used Travila in the last 24 hours
                        </Typography>
                    </UsersStats>

                    <StatsItem>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            45+
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Global Branches
                        </Typography>
                    </StatsItem>
                    <StatsItem>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            29K
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Destinations Collaboration
                        </Typography>
                    </StatsItem>
                    <StatsItem>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            20+
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Years Experience
                        </Typography>
                    </StatsItem>
                    <StatsItem>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            168K
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Happy Customers
                        </Typography>
                    </StatsItem>
                </StatsContainer>

            </Container>
        </AboutSection>
    );
};

export default About;