import { Box, Typography, Stack, Divider, Grid } from '@mui/material';
import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      company: 'Clemson University',
      location: 'Clemson',
      role: 'Graduate Student Assistant',
      period: 'Nov 2024 – April 2026',
      points: [
        'Built Prepitus, an AI-powered SAT tutoring platform using React 18, Redux Toolkit, Node.js/Express, and AWS, following a microservices architecture with CI/CD deployment.',
        'Integrated Google OAuth 2.0, JWT authentication, and Stripe-based subscription plans to reduce onboarding friction by 50%.',
        'Automated deferred bootcamp plan activation using AWS EventBridge Scheduler and Lambda, eliminating manual intervention for subscription transitions.',
        'Built a semantic search system over 48 knowledge domains using Sentence Transformers and Pinecone Vector DB, improving student engagement by 40%.',
        'Deployed an LSTM-based Deep Knowledge Tracing model via PyTorch + FastAPI to predict student mastery and integrated OpenAI API for AI-generated flashcards and study plans.',
        'Developed web tools (College Chance Calculator, SAT Prep Plan) for students which increased enrollment by 20%.'
      ]
    },
    {
      company: 'Newgen Software',
      location: 'Mumbai',
      role: 'Senior Software Engineer',
      period: 'June 2021 – May 2024',
      points: [
        'Built custom dashboards for banking operations teams to track and act on pending tasks, improving work efficiency by 40%.',
        'Implemented Penal Charge, Waiver, and Reversal modules for Axis Bank in Java + Oracle SQL, reducing transaction failures by 25%.',
        'Led the CAD Centralization module, delivering 25 workflows integrated with Omnidocs DMS for document uploads, on time with zero production issues, earning formal client appreciation.',
        'Led the iBPS and Omnidocs product upgrade to remediate Log4j vulnerabilities across all environments with minimal downtime.',
        'Built a Java mailer utility integrated with IBM MQ and Oracle DB to automate email notifications, improving delivery reliability for banking workflows.',
        'Earned the Rising Star Award for cutting deployment errors by 30% and maintaining high system reliability.'
      ]
    },
    {
      company: 'Wipro Technologies',
      location: 'Pune',
      role: 'Project Engineer',
      period: 'July 2019 – June 2021',
      points: [
        'Migrated HSBC’s legacy CMS from Struts 1.x to 2.x with Java + Spring, improving system performance by 15% and reducing response time by 20%.',
        'Managed rollout and rollback for CMS serving 200K+ users, delivering the migration with 100% uptime and zero data loss.'
      ]
    }
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
            sx={{ position: 'relative' }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{exp.company}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{exp.location}</Typography>
                <Typography variant="caption" sx={{ 
                  display: 'inline-block',
                  px: 1.5, 
                  py: 0.5, 
                  borderRadius: 1, 
                  bgcolor: 'rgba(99, 102, 241, 0.1)', 
                  color: 'secondary.main',
                  fontWeight: 600
                }}>
                  {exp.period}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{exp.role}</Typography>
                <Stack spacing={1.5}>
                  {exp.points.map((point, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ 
                        minWidth: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        bgcolor: 'secondary.main', 
                        mt: 1.2 
                      }} />
                      <Typography variant="body1" color="text.secondary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
            {index !== experiences.length - 1 && (
              <Divider sx={{ mt: 6 }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
