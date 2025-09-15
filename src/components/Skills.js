import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

const skills = {
  programming: [
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML/CSS"
  ],
  tools: [
    "GitLab CI/CD",
    "Playwright",
    "REST APIs",
    "Docker",
    "Kubernetes",
    "Visual Studio Code",
    "Git",
    "Linux",
    "AWS",
    "Azure",
    "CloudFormation",
    "API Gateway",
    "Lambda",
    "S3",
    "CloudFront",
  ],
  cloud: [
    "AWS Services (EC2, S3, Lambda, CloudFront, API Gateway)",
    "Infrastructure as Code (CloudFormation)",
    "CI/CD Pipelines",
    "Containerization (Docker, Kubernetes)",
    "Serverless Architecture",
    "Cloud Migration (Azure to AWS)",
  ],
};

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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Programming Languages
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {skills.programming.map((skill, index) => (
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
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
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

        {/* Cloud & DevOps */}
        <Grid item xs={12} md={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Cloud & DevOps
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
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
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                      mb: 1,
                      display: "inline-block",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
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

        {/* Tools & Technologies */}
        <Grid item xs={12} md={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Tools & Technologies
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
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
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                      mb: 1,
                      display: "inline-block",
                      "&:hover": {
                        bgcolor: "action.hover",
                      },
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
