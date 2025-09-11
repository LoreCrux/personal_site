import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Covr Financial Technologies',
    logo: '/logos/covr-logo.png',
    position: 'DevOps Engineer',
    location: 'Remote',
    duration: 'March 2025 - August 2025',
    responsibilities: [
      'Designed and implemented GitLab CI/CD pipelines for multiple repos to automate build/test/deploy workflows, drastically reducing deployment time',
      'Introduced automatic semantic versioning in GitLab CI repos to track and tag versions of repositories',
      'Implemented AWS CloudFormation templates to automate API Gateway, Lambda, and S3 deployments across multiple environments',
      'Migrated workloads from Azure to AWS CloudFront, reducing cloud costs by thousands annually'
    ]
  },
  {
    id: 2,
    company: 'Covr Financial Technologies',
    logo: '/logos/covr-logo.png',
    position: 'Software Development Engineer in Test',
    location: 'Remote',
    duration: 'May 2022 - March 2025',
    responsibilities: [
      'Built and maintained a TypeScript + Playwright automation framework for UI and API testing, increasing test coverage by 90%',
      'Authored over 400 automated tests, tripling regression coverage and reducing test cycle time',
      'Mentored manual QA engineers in automation and DevOps practices',
      'Created GitLab CI/CD integration pipeline with CRON jobs for nightly test runs and reporting'
    ]
  },
  {
    id: 3,
    company: 'Preco Electronics/Sensata Technologies',
    logo: '/logos/sensata-logo.png',
    position: 'Lead Test Engineer',
    location: 'Boise, ID',
    duration: 'March 2020 - May 2022',
    responsibilities: [
      'Oversaw testing efforts for embedded radar sensor systems',
      'Organized testing locations with local and international businesses for global testing coverage',
      'Developed test plans based on EU standards and requirements'
    ]
  },
  {
    id: 4,
    company: 'Cradlepoint',
    logo: '/logos/cradlepoint-logo.png',
    position: 'Software Engineer in Test/QA Engineer (SaaS)',
    location: 'Boise, ID',
    duration: 'July 2015 - October 2019',
    responsibilities: [
      'Automated UI/API system integration tests and embedded them into deployment pipelines',
      'Supported customer escalations and automated regression workflows',
      'Improved release cadence and expanded test coverage'
    ]
  },
  {
    id: 5,
    company: 'Beyondsoft (Hewlett-Packard)',
    logo: '/logos/hp-logo.png',
    position: 'Test Engineer II',
    location: 'Boise, ID',
    duration: 'January 2014 - July 2015',
    responsibilities: [
      'Performed testing on multi-vendor software and hardware technologies',
      'Assisted engineers with organizing and creating test plans'
    ]
  },
  {
    id: 6,
    company: 'Adecco',
    logo: '/logos/adecco-logo.png',
    position: 'Test Technician III',
    location: 'Boise, ID',
    duration: 'April 2013 - July 2013',
    responsibilities: [
      'Read, modified, compiled, and deployed code for automation execution'
    ]
  }
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2">
        Work Experience
      </Typography>
      
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              mb: 3, 
              borderRadius: 2,
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease-in-out'
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 2 }}>
              <Avatar 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                sx={{ 
                  width: 40, 
                  height: 40,
                  '& img': {
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }
                }}
              />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                {exp.company}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.position}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
              {exp.location}
            </Typography>
            
            <List dense disablePadding>
              {exp.responsibilities.map((item, i) => (
                <ListItem key={i} sx={{ py: 0.5, pl: 2 }}>
                  <ListItemText 
                    primary={
                      <Typography variant="body2" component="span">
                        • {item}
                      </Typography>
                    } 
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </motion.div>
      ))}
    </Box>
  );
};

export default Experience;
