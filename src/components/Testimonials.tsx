'use client';

import React from 'react';
import { Box, Typography, styled, Container, Grid, Button, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

// Bo'lim uchun asosiy styled komponent
const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: '#e8f0fe', // Fon rangi rasmdagidek
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
  },
}));

// Bezak chiziqlar uchun styled komponent
const DotsPattern = styled(Box)({
  position: 'absolute',
  top: '15%',
  left: '40%',
  width: '150px',
  height: '100px',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%23BCCBDE'/%3E%3C/svg%3E%0A")`,
  backgroundRepeat: 'repeat',
  transform: 'rotate(-15deg)',
  opacity: 0.5,
});

// Yulduzlar uchun styled komponent
const RatingStars = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#ffc107',
  marginBottom: '8px',
});

// Fikr-mulohaza kartasi uchun styled komponent
const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(4),
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

// Asosiy kontentni yonma-yon joylashtirish uchun flex komponent
const MainContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

const LeftContent = styled(Box)(({ theme }) => ({
    flex: '0 0 35%',
    [theme.breakpoints.down('md')]: {
        flex: 'auto',
    },
}));

const RightContent = styled(Box)(({ theme }) => ({
    flex: '1 1 65%',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(4),
    overflowX: 'auto', // Agar kartalar sig'masa, scroll paydo bo'ladi
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        overflowX: 'visible',
    },
}));

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials-section">
      <Container>
        <DotsPattern /> {/* Bezak chiziqlarni joylashtiramiz */}
        <MainContent>
          {/* Chap tomondagi sarlavha va ta'rif */}
          <LeftContent>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1, textTransform: 'uppercase', color: '#6a6a6a' }}>
                <span style={{ backgroundColor: 'white', padding: '4px 8px', borderRadius: '4px' }}>testimonials</span>
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                What our clients are saying about us?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined" sx={{ borderRadius: '50%', minWidth: 'auto', p: 1.5, borderColor: '#ccc', color: '#6a6a6a' }}>
                <ArrowBackIcon />
              </Button>
              <Button variant="outlined" sx={{ borderRadius: '50%', minWidth: 'auto', p: 1.5, borderColor: '#ccc', color: '#6a6a6a' }}>
                <ArrowForwardIcon />
              </Button>
            </Box>
          </LeftContent>

          {/* O'ng tomondagi fikr-mulohaza kartalari */}
          <RightContent>
              {/* Birinchi fikr-mulohaza */}
              <TestimonialCard sx={{ minWidth: '350px' }}> {/* Karta uchun minimal kenglik berdik */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar alt="Sara Mohamed" src="https://i.pravatar.cc/100?img=1" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Sara Mohamed
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jakatar
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 'auto' }}>
                    <RatingStars>
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </RatingStars>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels
                </Typography>
              </TestimonialCard>

              {/* Ikkinchi fikr-mulohaza */}
              <TestimonialCard sx={{ minWidth: '350px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar alt="Atend John" src="https://i.pravatar.cc/100?img=2" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Atend John
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      California
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 'auto' }}>
                    <RatingStars>
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </RatingStars>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  I had a last-minute business trip, and the hotel booking system came to the rescue. I was able to find a high-quality hotel in no time and even got a great deal on the room. The confirmation process was straightforward, and I received all the necessary information promptly.
                </Typography>
              </TestimonialCard>
              
              {/* Uchinch fikr-mulohaza (qo'shimcha) */}
               <TestimonialCard sx={{ minWidth: '350px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar alt="Emily Davis" src="https://i.pravatar.cc/100?img=3" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Emily Davis
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      New York
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 'auto' }}>
                    <RatingStars>
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </RatingStars>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Amazing experience! The travel guides were so helpful and made my trip to Italy unforgettable. Highly recommend this service to anyone planning a vacation.
                </Typography>
              </TestimonialCard>
          </RightContent>
        </MainContent>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;