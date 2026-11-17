import { Box, Typography, Stack, Divider, Grid } from "@mui/material";
import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      company: "Clemson University",
      location: "Clemson",
      role: "Full Stack Engineer",
      period: "Nov 2024 – April 2026",
      // points: [
      //   "Built Prepitus, a full-stack AI tutoring platform, with React, Node.js REST APIs, and AWS so students could practice, track progress, and get study guidance in one place, growing to 2,600+ active students.",
      //   "Added Google OAuth 2.0 sign-in, JWT sessions, and Stripe subscriptions so new students could sign up and pay in a few clicks, cutting onboarding drop-off by 50%.",
      //   "Automated paid-plan activation with AWS EventBridge Scheduler and Lambda so students were switched on at the right date without anyone on the team touching billing, saving about 6 engineering hours a week.",
      //   "Built semantic search and a RAG pipeline with Sentence Transformers, Pinecone, and the OpenAI API so students got answers grounded in the right practice material, with search results in under 120 ms.",
      //   "Deployed an LSTM-based Deep Knowledge Tracing model in PyTorch as a FastAPI service so the platform could estimate what each student had mastered.",
      // ],
      points:[
          "Scaled an AI tutoring platform with 99.9% uptime by architecting full-stack REST APIs in Node.js, an interactive React frontend, and scalable AWS cloud infrastructure.",
          "Cut onboarding drop-off by 50% and reduced initial bundle load times by bundling the React client with Vite and npm, integrating Google OAuth 2.0 authentication, and automating Stripe billing workflows.",
          "Saved 6 engineering hours/week and eliminated manual provisioning delays by deploying an event-driven serverless pipeline using AWS EventBridge Scheduler and Lambda for automated subscription lifecycle management.",
          "Reduced query retrieval latency to <120 ms and enabled sub-80 ms real-time mastery tracking by engineering a RAG pipeline (Sentence Transformers, Pinecone, OpenAI API) alongside an LSTM Deep Knowledge Tracing model served via FastAPI.",
          "Reduced educator task-assignment time by 60% and monitoring overhead by 40% by developing a React and Node.js curriculum engine mapping 30+ SAT taxonomies and a 7-day real-time student engagement heatmap.",
          "Eliminated unauthorized cross-tenant data access and reduced homework configuration issues by 90% by architecting granular classroomlevel RBAC and a session-based “View as Student” impersonation mode across 9+ concurrent classrooms in Node.js and React."
          ],
    },
    {
      company: "Newgen Software",
      location: "Mumbai",
      role: "Senior Software Engineer",
      period: "June 2021 – May 2024",
      // points: [
      //   "Built Java and Spring Boot microservices and JSP dashboards for the CBO Synthesis application, automating 3 penalty workflows so branch staff could act on pending tasks in one place instead of tracking them through Finacle and email, raising branch throughput.",
      //   "Moved Oracle reporting reads to daily-refreshed materialized views so reports stopped competing with live transactions at peak hours, cutting database CPU use by 25%.",
      //   "Moved email notifications onto an asynchronous Java and IBM MQ messaging queue so customer transactions no longer waited on email delivery, cutting response time by 300ms.",
        
      // ],
      points:[
        "Increased branch operational throughput by 25% across regional branches by developing central Java and Spring Boot microservices and JSP dashboards to eliminate manual Finacle and email task handoffs",
        "Cut penalty charge and waiver processing cycle time by 70% (from hours to minutes) for Axis Bank by automating maker-checker workflows on Newgen iBPS integrated with internal core fund transfer APIs.",
        "Reduced peak-hour database CPU utilization by 25% and accelerated report generation by isolating heavy analytical reads into dailyrefreshed Oracle materialized views away from live OLTP tables.",
        "Decreased core banking transaction latency by 300 ms by refactoring synchronous email notification logic into a decoupled, asynchronous queue using Java and IBM MQ.",
        "Exceeded initial delivery milestones by 39% and achieved zero production issues during rollout by engineering the central CAD dashboard and 25 integrated child workflows in Java, Spring Boot, and Newgen iBPS to resolve critical product implementation bottlenecks.",
        "Accelerated international service request tracking across Singapore and DIFC overseas branches ahead of UAT deadlines by developing cross-border banking workflows in Java and Newgen iBPS, configuring isolated enterprise cabinets for multi-jurisdiction compliance."
      ],
    },
    {
      company: "Wipro Technologies",
      location: "Pune",
      role: "Project Engineer",
      period: "July 2019 – June 2021",
      points: [
      "Maintained 100% operational availability across 50,000+ enterprise users by executing the phased migration of HSBC’s Collateral Management System from Struts 1.x to Struts 2.x and optimizing database connection pooling to eliminate thread contention under peak loads.",
    "Reduced post-release defects by 35% and raised automated test coverage to 80%+ by authoring comprehensive JUnit test suites, building automated Maven builds, and enforcing SonarQube quality gates within a multi-branch Jenkins CI/CD pipeline."  
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
