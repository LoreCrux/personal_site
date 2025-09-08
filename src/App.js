import React from 'react';
import { Box, Container, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Footer from './components/Footer';

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" color="primary" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Tyler Durham
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                <Button color="inherit" href="#experience">Experience</Button>
                <Button color="inherit" href="#education">Education</Button>
                <Button color="inherit" href="#skills">Skills</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="main" sx={{ flex: 1, py: 4, bgcolor: 'background.default' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
            <Container maxWidth="lg" sx={{ py: 4 }}>
              <Experience />
              {/* <Projects /> */}
              <Education />
              <Skills />
            </Container>
          </motion.div>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
