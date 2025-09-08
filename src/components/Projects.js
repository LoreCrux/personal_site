import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardMedia, Link, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and what it does.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/LoreCrux/project1',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project and its key features.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/LoreCrux/project2',
    demo: '#',
    tags: ['Python', 'Django', 'PostgreSQL']
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project and technologies used.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/LoreCrux/project3',
    demo: '#',
    tags: ['JavaScript', 'Express', 'MongoDB']
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
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
          <Link 
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
          </Link>
          {project.demo !== '#' && (
            <Link 
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
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  return (
    <Box component="section" id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
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
