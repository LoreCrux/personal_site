import React from 'react';
import { Box, Typography, Paper, Grid, LinearProgress, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const skills = {
  programming: [
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'HTML/CSS', level: 85 },
  ],
  tools: [
    'GitLab CI/CD', 'Playwright', 'REST APIs', 'Docker', 'Kubernetes',
    'Visual Studio Code', 'Git', 'Linux', 'AWS', 'Azure', 'CloudFormation',
    'API Gateway', 'Lambda', 'S3', 'CloudFront'
  ],
  cloud: [
    'AWS Services (EC2, S3, Lambda, CloudFront, API Gateway)',
    'Infrastructure as Code (CloudFormation)',
    'CI/CD Pipelines',
    'Containerization (Docker, Kubernetes)',
    'Serverless Architecture',
    'Cloud Migration (Azure to AWS)'
  ]
};

const SkillProgress = ({ name, level }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2" color="text.secondary">{level}%</Typography>
    </Box>
    <LinearProgress 
      variant="determinate" 
      value={level} 
      sx={{
        height: 8,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        '& .MuiLinearProgress-bar': {
          borderRadius: 5,
          backgroundColor: '#1976d2',
        },
      }}
    />
  </Box>
);

const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2">
        Skills & Technologies
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Programming Languages */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3,
                transition: 'all 0.3s ease-in-out'
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CodeIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Programming Languages
              </Typography>
            </Box>
            
            {skills.programming.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <SkillProgress name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </Paper>
        </Grid>
        
        {/* Cloud & DevOps */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3,
                transition: 'all 0.3s ease-in-out'
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <StorageIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Cloud & DevOps
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {skills.cloud.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      mb: 1,
                      display: 'inline-block',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    {item}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Grid>
        
        {/* Tools & Technologies */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3,
                transition: 'all 0.3s ease-in-out'
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <BuildIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Tools & Technologies
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      mb: 1,
                      display: 'inline-block',
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    {tool}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
