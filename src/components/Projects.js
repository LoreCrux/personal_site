import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardMedia, Link as MuiLink, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';

const projects = [
  {
    title: 'Personal Website',
    description: 'This is a project used to spruce up my personal website about me and my skills.',
    // image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/LoreCrux/personal_site',
    demo: '#',
    tags: ['React', 'Node.js', 'GitHub Actions', 'AWS']
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {project.image && (
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt=""
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.tags.map((tag, index) => (
            <Box 
              key={index}
              sx={{
                bgcolor: 'primary.light',
                color: 'white',
                px: 1,
                borderRadius: 1,
                fontSize: '0.7rem',
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
          <MuiLink 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            <GitHubIcon sx={{ mr: 0.5, fontSize: '1.1rem' }} /> Code
          </MuiLink>
          {project.demo !== '#' && (
            <MuiLink 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                color: 'primary.main',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <OpenInNewIcon sx={{ mr: 0.5, fontSize: '1.1rem' }} /> Live Demo
            </MuiLink>
          )}
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  return (
    <Box component="section" id="projects" sx={{ minHeight: 'calc(100vh - 128px)', py: 6 }}>
      <Container maxWidth="lg">
        <Button 
          component={RouterLink} 
          to="/" 
          startIcon={<ArrowBackIcon />} 
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 6 }}>
            My Projects
          </Typography>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
