import React from 'react';
import { Box, Typography, Button, Link as MuiLink, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image Section */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/boise.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 70%)',
            zIndex: 2,
          }
        }}
      />
      
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        <Box sx={{ flex: 1, maxWidth: { md: '60%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h1" sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Hey, I'm Tyler
            </Typography>
            
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: 'text.primary'
            }}>
              DevOps Engineer
            </Typography>

            <Typography variant="body1" sx={{ 
              mb: 4, 
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'text.secondary'
            }}>
              I build and optimize cloud infrastructure and CI/CD pipelines to deliver scalable and reliable applications.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              {/* GitHub button commented out
              <Button 
                variant="contained" 
                color="primary"
                component="a"
                href="https://github.com/LoreCrux"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
              */}
              <Button 
                variant="outlined" 
                color="primary"
                component="a"
                href="https://cloudlearner.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<ArticleIcon />}
              >
                Blog
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 4, alignItems: 'center' }}>
              <MuiLink 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener"
                color="inherit"
                sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </MuiLink>
            </Box>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box 
            component="div"
            sx={{
              width: 280,
              height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: 3,
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }
            }}
          >
            <img 
              src="/profile.jpg" 
              alt="Tyler Durham"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x300?text=Tyler+Durham';
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </Container>
    </Box>
  );
};

export default Header;
