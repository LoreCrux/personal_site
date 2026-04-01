import React, { useState } from 'react';
import { Box, Container, CssBaseline, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Education', to: '/#education' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/projects' },
];

// Scroll to top on route change, but skip when navigating to a hash section
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
              Tyler Durham
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navLinks.map((link) => (
                <Button key={link.label} color="inherit" component={Link} to={link.to}>
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              color="inherit"
              edge="end"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton component={Link} to={link.to}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flex: 1, py: 4, bgcolor: 'background.default' }}>
        <ScrollToTop />
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;
