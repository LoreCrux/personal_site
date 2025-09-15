import React, { useEffect } from 'react';
import { Box, Container, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Components
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
      margin: '2rem 0 1rem',
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #1976d2',
      display: 'inline-block',
    },
  },
});

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static" color="primary" elevation={0}>
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                  Tyler Durham
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                  <Button color="inherit" component={Link} to="/about">About</Button>
                  <Button color="inherit" component={Link} to="/#experience">Experience</Button>
                  <Button color="inherit" component={Link} to="/#education">Education</Button>
                  <Button color="inherit" component={Link} to="/#skills">Skills</Button>
                  <Button color="inherit" component={Link} to="/projects">Projects</Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          <Box component="main" sx={{ flex: 1, py: 4, bgcolor: 'background.default' }}>
            <ScrollToTop />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={window.location.pathname} // Force re-render on route change
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </motion.div>
          </Box>

          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
