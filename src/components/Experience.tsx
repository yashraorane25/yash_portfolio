import { Box, Typography, Stack, Divider, Grid } from "@mui/material";
import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      company: "Clemson University",
      location: "Clemson",
      role: "Graduate Student Assistant",
      period: "Nov 2024 – April 2026",
      points: [
        "Built Prepitus, a full-stack AI tutoring platform, with React, Node.js REST APIs, and AWS so students could practice, track progress, and get study guidance in one place, growing to 2,600+ active students.",
        "Added Google OAuth 2.0 sign-in, JWT sessions, and Stripe subscriptions so new students could sign up and pay in a few clicks, cutting onboarding drop-off by 50%.",
        "Automated paid-plan activation with AWS EventBridge Scheduler and Lambda so students were switched on at the right date without anyone on the team touching billing, saving about 6 engineering hours a week.",
        "Built semantic search and a RAG pipeline with Sentence Transformers, Pinecone, and the OpenAI API so students got answers grounded in the right practice material, with search results in under 120 ms.",
        "Deployed an LSTM-based Deep Knowledge Tracing model in PyTorch as a FastAPI service so the platform could estimate what each student had mastered.",
      ],
    },
    {
      company: "Newgen Software",
      location: "Mumbai",
      role: "Senior Software Engineer",
      period: "June 2021 – May 2024",
      points: [
        "Built Java and Spring Boot microservices and JSP dashboards for the CBO Synthesis application, automating 3 penalty workflows so branch staff could act on pending tasks in one place instead of tracking them through Finacle and email, raising branch throughput.",
        "Moved Oracle reporting reads to daily-refreshed materialized views so reports stopped competing with live transactions at peak hours, cutting database CPU use by 25%.",
        "Moved email notifications onto an asynchronous Java and IBM MQ messaging queue so customer transactions no longer waited on email delivery, cutting response time by 300ms.",
        
      ],
    },
    {
      company: "Wipro Technologies",
      location: "Pune",
      role: "Project Engineer",
      period: "July 2019 – June 2021",
      points: [
        "Migrated HSBC's Collateral Management System from Struts 1.x to Struts 2.x so the bank could modernize the platform while 50,000+ users kept working.",
        "Wrote automated JUnit tests and made SonarQube quality gates mandatory in the CI pipeline so bugs were caught before release.",
      ],
    },
  ];

  return (
    <Box id="experience" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ mb: 6 }}
        component={motion.h3}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </Typography>

      <Stack spacing={6}>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            sx={{ position: "relative" }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {exp.location}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: "rgba(99, 102, 241, 0.1)",
                    color: "secondary.main",
                    fontWeight: 600,
                  }}
                >
                  {exp.period}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {exp.role}
                </Typography>
                <Stack spacing={1.5}>
                  {exp.points.map((point, i) => (
                    <Box key={i} sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          minWidth: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "secondary.main",
                          mt: 1.2,
                        }}
                      />
                      <Typography variant="body1" color="text.secondary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
            {index !== experiences.length - 1 && <Divider sx={{ mt: 6 }} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
