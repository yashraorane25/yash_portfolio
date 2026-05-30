import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'motion/react';
import { Code2, Brain, Cloud, Database } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Code2 size={32} />, title: 'Full-Stack Dev', desc: 'Expertise in React, Node.js, and modern web architectures.' },
    { icon: <Brain size={32} />, title: 'AI & ML', desc: 'Building RAG pipelines and deploying LLM-based solutions.' },
    { icon: <Cloud size={32} />, title: 'Cloud & DevOps', desc: 'AWS certified professional with experience in CI/CD and microservices.' },
    { icon: <Database size={32} />, title: 'Databases', desc: 'Proficient in SQL, NoSQL, and Vector databases like Pinecone.' },
  ];

  return (
    <Box id="about" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6, maxWidth: 800 }}>
          I am a Full-Stack Software Engineer with <strong>5+ years</strong> of industry experience building scalable web applications and microservices-based systems. Currently pursuing my MS in Computer Science at Clemson University, I am proficient in <strong>Java, Spring Boot, React, Node.js, and AI integrations</strong>, with a proven track record of delivering production-grade features across Fintech and AI-driven educational platforms.
        </Typography>

        <Grid container spacing={3}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Paper
                component={motion.div}
                whileHover={{ y: -10 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: 'none',
                  bgcolor: 'background.paper'
                }}
              >
                <Box sx={{ color: 'secondary.main' }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
