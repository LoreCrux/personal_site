import React from 'react';
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        bgcolor: 'primary.main',
        color: 'white',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2">
            © {currentYear} Tyler Durham. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/tylerdurham208/" 
                target="_blank" 
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                component="a" 
                href="https://github.com/tylerd01" 
                target="_blank" 
                rel="noopener noreferrer"
                color="inherit"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                component="a" 
                href="mailto:tyler.durham01@gmail.com"
                color="inherit"
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
            </motion.div>
          </Box>
          
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2">
              Built with React, Material-UI, and Framer Motion
            </Typography>
            <Typography variant="caption" display="block" sx={{ opacity: 0.8 }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
