'use client';

import { Box, Typography, Paper, Container } from '@mui/material';
import TourIcon from '@mui/icons-material/Tour';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import MapIcon from '@mui/icons-material/Map';
import { keyframes } from '@emotion/react';

// Animatsiyalar
const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.7; }
  50% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.7; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServicesSection = () => {
  return (
    <Box
      id="services-section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 20% 20%, #e3f2fd, #fafafa)',
      }}
    >
      {/* Dekorativ fondlar */}
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          top: '-10%',
          left: '-10%',
          background: 'linear-gradient(135deg, #2196f3, #64b5f6)',
          filter: 'blur(160px)',
          opacity: 0.3,
          animation: `${float} 18s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 450,
          height: 450,
          borderRadius: '50%',
          bottom: '-12%',
          right: '-8%',
          background: 'linear-gradient(135deg, #ffca28, #fff59d)',
          filter: 'blur(180px)',
          opacity: 0.3,
          animation: `${float} 20s ease-in-out infinite reverse`,
        }}
      />

      {/* Aylanadigan halqa */}
      <Box
        sx={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: '50%',
          top: '35%',
          left: '42%',
          border: '10px solid rgba(33,150,243,0.15)',
          animation: `${rotate} 60s linear infinite`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: { xs: 4, md: 6 },
            color: '#0d47a1',
            textShadow: '2px 2px 12px rgba(0,0,0,0.1)',
            animation: `${slideInUp} 0.8s ease-out`,
          }}
        >
          Explore Samarkand with Ease
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: { xs: 8, md: 10 },
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.7,
            color: 'text.secondary',
            animation: `${slideInUp} 1s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          Whether you're planning a custom tour, booking a hotel, or exploring historical landmarks — we make your travel simple and unforgettable.
        </Typography>

        {/* Kartalar */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 5,
          }}
        >
          <ServiceCard
            icon={<TourIcon sx={{ fontSize: '4.5rem', color: '#1565c0' }} />}
            title="Custom Tours"
            description="Build your own tour in Samarkand based on your preferences, budget, and duration — powered by AI."
          />
          <ServiceCard
            icon={<HotelIcon sx={{ fontSize: '4.5rem', color: '#fbc02d' }} />}
            title="Hotel Booking"
            description="Easily find and book top-rated hotels across Samarkand with exclusive deals from our partners."
          />
          <ServiceCard
            icon={<DirectionsWalkIcon sx={{ fontSize: '4.5rem', color: '#388e3c' }} />}
            title="Local Guides"
            description="Certified local guides will lead you through hidden gems and iconic sites in Samarkand."
          />
          <ServiceCard
            icon={<MapIcon sx={{ fontSize: '4.5rem', color: '#ff7043' }} />}
            title="Location Mapping"
            description="Get accurate and real-time maps for your personalized tour routes around the city."
          />
        </Box>
      </Container>
    </Box>
  );
};

// ServiceCard komponenti
const ServiceCard = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={14}
      sx={{
        width: { xs: '100%', sm: 330, md: 360 },
        minHeight: { xs: 360, sm: 400, md: 440 },
        p: { xs: 5, sm: 6, md: 7 },
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(160deg, rgba(255,255,255,0.95), rgba(240,248,255,0.9))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.45s ease',
        animation: `${slideInUp} 1s ease-out forwards`,
        opacity: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
        '&:hover': {
          transform: 'translateY(-16px) scale(1.05)',
          boxShadow: '0 40px 100px rgba(33,150,243,0.2)',
        },
      }}
    >
      <Box sx={{ mb: 4 }}>{icon}</Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: '#263238',
          fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.7,
          fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default ServicesSection;
