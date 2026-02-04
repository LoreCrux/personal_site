import React from "react";
import { Box, Typography, Paper, Grid, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  return (
    <Box id="about" sx={{ minHeight: 'calc(100vh - 128px)', py: 6 }}>
      <Container maxWidth="lg">
        <Button 
          component={RouterLink} 
          to="/" 
          startIcon={<ArrowBackIcon />} 
          sx={{ mb: 3 }}
        >
          Back to Home
        </Button>
        
        <Typography id="about-heading" data-testid="about-heading" variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          About Me
        </Typography>
      
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 2,
          "&:hover": {
            boxShadow: 3,
            transition: "all 0.3s ease-in-out",
          },
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Hi, I'm Tyler
              </Typography>
              <Typography variant="body1" paragraph>
              I help organizations bring order to cloud complexity—designing systems that scale, run reliably, and actually align with business goals. 
              My background in QA, test automation, and DevOps gives me a rare perspective: 
              I’ve been in the trenches building CI/CD pipelines, automating deployments, and troubleshooting production. 
              That hands-on experience shapes how I approach system design today.
              </Typography>
              
              <Box sx={{ mb: 3 }} />
              
              <Typography variant="body1" paragraph>
                Right now, I specialize in AWS, containerization, and infrastructure as code—building the kind of platforms that engineering teams can depend on. 
                But my long-term focus is Solutions Architecture: bridging the gap between technical design and business strategy. 
                I'm especially energized by conversations where I can translate requirements into practical cloud solutions that are scalable, cost-efficient, and resilient.
              </Typography>
              <Typography variant="body1" paragraph>
                What sets me apart? I'm not just diagramming high-level architectures—I've built and run the systems those diagrams represent. That mix of strategy + execution means I understand both the design trade-offs and the operational realities that make or break a system.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Outside of work, I stay active through weightlifting, hiking, and tinkering with homelab projects (yes, I run Kubernetes at home for fun). Always learning, always building, and always looking for ways to help teams ship smarter, faster, and with less friction.
              </Typography>
              
              <Typography variant="body1">
                I'm always open to interesting projects and collaborations. Feel free to get in touch!
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
