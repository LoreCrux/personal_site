import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Covr Financial Technologies',
    logo: '/logos/covr-logo.png',
    position: 'DevOps Engineer',
    location: 'Boise, ID',
    duration: 'Mar 2025 – Aug 2025',
    responsibilities: [
      'Partnered with engineering leadership to migrate 5+ core repositories from Azure DevOps to GitLab, architecting modular CI/CD templates that achieved a 90% reduction in deployment times.',
      'Automated the provisioning of multi-tenant AWS infrastructure (S3, CloudFront, API Gateway, Lambda) using CloudFormation, ensuring 100% environment parity across Dev, Staging, and Production.',
      'Engineered automated semantic versioning and release tagging systems, increasing deployment traceability and establishing high-confidence rollback strategies.',
      'Designed and implemented downstream pipelines for multi-service deployments, significantly reducing pipeline duplication and cutting developer onboarding time by ~40%.',
      'Enhanced platform observability by configuring proactive monitoring for CI/CD pipelines via CloudWatch, reducing delivery interruptions and unplanned downtime.',
    ]
  },
  {
    id: 2,
    company: 'Covr Financial Technologies',
    logo: '/logos/covr-logo.png',
    position: 'Software Development Engineer in Test',
    location: 'Boise, ID',
    duration: 'May 2022 – Mar 2025',
    responsibilities: [
      'Built a test automation framework from scratch using Playwright, reducing manual test validation by ~90% by shifting execution to a nightly CI pipeline.',
      'Introduced pipeline sharding to parallelize test execution, cutting suite runtime from 25–30 minutes to 5–10 minutes, reducing developer wait time and accelerating release cycles.',
      'Implemented smoke test suite running automatically against production post-deploy, eliminating ~10–15 minutes of manual on-call validation per deployment.',
      'Implemented auto-scaling on test infrastructure services to handle increased parallel load from sharding, maintaining pipeline stability under high execution demand.',
      'Designed automated quality gates in CI/CD pipelines, preventing regressions from reaching production across rapid release cycles.',
      'Refactored inheritance-heavy automation framework into a composition-based modular design, significantly improving test stability, maintainability, and execution predictability.',
      'Supported AWS infrastructure provisioning and migration using CloudFormation and automation tooling.',
      'Mentored development teams in automation ownership and CI integration, reducing centralized QA dependency and increasing delivery velocity.',
    ]
  },
  {
    id: 3,
    company: 'Sensata Technologies',
    logo: '/logos/sensata-logo.png',
    position: 'Test Engineer',
    location: 'Boise, ID',
    duration: 'Mar 2020 – May 2022',
    responsibilities: [
      'Led testing and compliance validation for embedded radar sensor systems meeting EU regulatory standards.',
      'Owned test strategy, execution, and defect triage for regulated systems with cross-border team coordination.',
      'Utilized specialized radar test equipment and vendor tooling to validate sensor accuracy for EU compliance certification.',
    ]
  },
  {
    id: 4,
    company: 'Cradlepoint',
    logo: '/logos/cradlepoint-logo.png',
    position: 'Software Engineer in Test',
    location: 'Boise, ID',
    duration: 'Jul 2015 – Oct 2019',
    responsibilities: [
      'Progressed from manual QA into SDET, helping define automation strategy and CI integration across engineering teams.',
      'Designed and maintained Python-based automated test suites for web and API systems integrated into CI/CD pipelines.',
      'Investigated Kubernetes pod failures impacting automated test execution, identifying infrastructure and application-level issues to improve reliability.',
    ]
  },
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ mb: 6 }}>
      <Typography id="experience-heading" data-testid="experience-heading" variant="h4" component="h2">
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
              <Typography id={`experience-company-${exp.id}`} data-testid={`experience-company-${exp.id}`} variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
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

            <List dense disablePadding sx={{ listStyleType: 'disc', pl: 3 }}>
              {exp.responsibilities.map((item, i) => (
                <ListItem key={i} sx={{ display: 'list-item', py: 0.5, pl: 0 }}>
                  <ListItemText primary={<Typography variant="body2">{item}</Typography>} />
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
