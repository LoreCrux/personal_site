import React, { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (hash) {
      // Use setTimeout to ensure the DOM has been updated
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 0);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ scrollMarginTop: '80px' }}>
          <Experience />
        </Box>
        <Box sx={{ scrollMarginTop: '80px', mt: 8 }}>
          <Education />
        </Box>
        <Box sx={{ scrollMarginTop: '80px', mt: 8 }}>
          <Skills />
        </Box>
      </Container>
    </>
  );
};

export default Home;
