import React from 'react';
import { Box, Typography, Button, Link as MuiLink, Container } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import { Link as RouterLink } from 'react-router-dom';

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
      
      <Container id="home" maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        <Box sx={{ flex: 1, maxWidth: { md: '60%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography id="hero-title" data-testid="hero-title" variant="h3" component="h1" sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Hey, I'm Tyler
            </Typography>
            
            <Typography id="hero-subtitle" data-testid="hero-subtitle" variant="h4" component="h2" sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: 'text.primary'
            }}>
              DevOps | Tech Strategy & Operations | Driving Scalable, Reliable Systems
            </Typography>

            <Typography variant="body1" sx={{ 
              mb: 4, 
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'text.secondary'
            }}>
              Thanks for checking out my site! Check out my{" "}
              <MuiLink 
                component={RouterLink}
                to="/about"
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 500, 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  cursor: 'pointer'
                }}
              >
                About Me
              </MuiLink>{" "}
              page to learn more. Also check out my{" "}
              <MuiLink 
                component={RouterLink}
                to="/projects"
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 500, 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  cursor: 'pointer'
                }}
              >
                Projects
              </MuiLink>{" "}
              page to see some of the work I've done.
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
                href="https://www.linkedin.com/in/tylerdurham208/" 
                target="_blank" 
                rel="noopener"
                color="inherit"
                sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </MuiLink>
            </Box>

            <Box component="nav" aria-label="Primary site navigation" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
              <MuiLink href="/#experience" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="Jump to Experience">Experience</MuiLink>
              <MuiLink href="/#education" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="Jump to Education">Education</MuiLink>
              <MuiLink href="/#skills" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="Jump to Skills">Skills</MuiLink>
              <MuiLink href="/#contact" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="Jump to Contact">Contact</MuiLink>
              <MuiLink component={RouterLink} to="/projects" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="Projects page">Projects</MuiLink>
              <MuiLink component={RouterLink} to="/about" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }} aria-label="About page">About</MuiLink>
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
