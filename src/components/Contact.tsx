'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactSection = () => {
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda formni serverga yuborish mumkin (API call)
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact-section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: theme.palette.mode === 'dark' ? '#0d1117' : 'rgba(255, 240, 245, 0.8)',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1c1f26 0%, #0d1117 100%)'
          : 'radial-gradient(circle at top left, #ffe6f0 0%, #fce4ec 70%, #fff 100%)',
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(8px)' : 'blur(20px)',
        borderRadius: '20px',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.7)'
          : '0 8px 32px rgba(255, 192, 203, 0.3)',
        border: theme.palette.mode === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(255, 192, 203, 0.4)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6, color: theme.palette.text.primary }}
        >
          Contact Us
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mb: 8,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={5}
            required
            fullWidth
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              alignSelf: 'flex-end',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              background: theme.palette.mode === 'dark' ? '#d81b60' : '#ff4081',
              '&:hover': {
                background: theme.palette.mode === 'dark' ? '#b71c1c' : '#f50057',
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Contact info */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon color="primary" />
            <Typography>contact@samarktours.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon color="primary" />
            <Typography>+998 90 123 45 67</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography>Samarkand, Uzbekistan</Typography>
          </Box>
        </Stack>
      </Container>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
