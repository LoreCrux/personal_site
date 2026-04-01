import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

const skills = {
  cloud: [
    "AWS (S3, CloudFront, API Gateway, Lambda, IAM, EC2, DynamoDB, CloudFormation)",
    "Environment Provisioning",
    "Multi-Environment Deployments",
    "DNS Management",
  ],
  platform: [
    "GitLab CI (Advanced Templates, Downstream Pipelines)",
    "GitHub Actions",
    "Azure DevOps",
    "Release Automation",
    "Semantic Versioning",
    "Environment Orchestration",
    "Modular Pipeline Design",
    "Onboarding Automation",
    "Multi-Tenant Deployment Patterns",
    "Deployment Traceability",
    "Rollback Strategies",
  ],
  automation: [
    "Python",
    "Bash",
    "TypeScript",
    "Playwright",
    "Load Testing (Artillery)",
    "Pipeline Sharding",
    "UI Stability Engineering",
    "Test Pyramid Strategy",
    "Cross-browser Automation",
    "SAML2 / OAuth 2.0 Validation",
    "IAM Policy Management",
    "PostgreSQL",
    "SQL Server",
    "MySQL",
    "DynamoDB",
    "Sentry",
    "AWS CloudWatch",
  ],
};

const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: 6 }}>
      <Typography id="skills-heading" data-testid="skills-heading" variant="h4" component="h2">
        Skills & Technologies
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Cloud & Infrastructure */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              height: "100%",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CodeIcon color="primary" sx={{ mr: 1 }} />
              <Typography id="skills-cloud-heading" data-testid="skills-cloud-heading" variant="h6" sx={{ fontWeight: "bold" }}>
                Cloud & Infrastructure
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.cloud.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                      mb: 1,
                      display: "inline-block",
                      "&:hover": { bgcolor: "primary.dark" },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {skill}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Platform & CI/CD */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              height: "100%",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <StorageIcon color="primary" sx={{ mr: 1 }} />
              <Typography id="skills-platform-heading" data-testid="skills-platform-heading" variant="h6" sx={{ fontWeight: "bold" }}>
                Platform & CI/CD
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.platform.map((item, index) => (
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
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                      mb: 1,
                      display: "inline-block",
                      "&:hover": { bgcolor: "primary.dark" },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {item}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Automation & Reliability */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2,
              height: "100%",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <BuildIcon color="primary" sx={{ mr: 1 }} />
              <Typography id="skills-automation-heading" data-testid="skills-automation-heading" variant="h6" sx={{ fontWeight: "bold" }}>
                Automation & Reliability
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.automation.map((tool, index) => (
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
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                      mb: 1,
                      display: "inline-block",
                      "&:hover": { bgcolor: "action.hover" },
                      transition: "all 0.2s ease-in-out",
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
