import React from 'react';
import { Box, Typography, Paper, Grid, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const education = [
  {
    id: 1,
    institution: 'Western Governors University',
    degree: 'B.S. Software Engineering',
    duration: 'Graduated',
    description: 'Focused on software development principles, algorithms, and system design.'
  },
  {
    id: 2,
    institution: 'College of Western Idaho',
    degree: 'A.A. Liberal Arts',
    duration: 'Graduated June 2015',
    description: 'General education with focus on computer science and mathematics.'
  }
];

const certifications = [
  'CompTIA Security+',
  'CompTIA Network+',
  'AWS Cloud Practitioner',
  'IT Operations Specialist',
  'ITIL v4 Foundation'
];

const Education = () => {
  return (
    <Box id="education" sx={{ mb: 6 }}>
      <Typography id="education-heading" data-testid="education-heading" variant="h4" component="h2">
        Education & Certifications
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Education Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon color="primary" sx={{ mr: 1 }} />
              <Typography id="education-education-heading" data-testid="education-education-heading" variant="h6" sx={{ fontWeight: 'bold' }}>
                Education
              </Typography>
            </Box>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Box sx={{ mb: 3, pb: 2, borderBottom: index !== education.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none' }}>
                  <Typography variant="h6" component="h3">
                    {edu.institution}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'medium' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                    {edu.duration}
                  </Typography>
                  <Typography variant="body2">
                    {edu.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Paper>
        </Grid>
        
        {/* Certifications Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WorkspacePremiumIcon color="primary" sx={{ mr: 1 }} />
              <Typography id="education-certifications-heading" data-testid="education-certifications-heading" variant="h6" sx={{ fontWeight: 'bold' }}>
                Certifications
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Chip 
                    label={cert} 
                    color="primary" 
                    variant="outlined"
                    sx={{ 
                      mb: 1,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: 2,
                      },
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer'
                    }}
                  />
                </motion.div>
              ))}
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Gaming', 'Weight Lifting', 'Hiking', 'Reading', 'Outdoor Activities'].map((interest, index) => (
                  <motion.div
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip 
                      label={interest}
                      variant="outlined"
                      sx={{ 
                        bgcolor: 'background.paper',
                        '&:hover': {
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText',
                        },
                        transition: 'all 0.3s ease-in-out'
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
