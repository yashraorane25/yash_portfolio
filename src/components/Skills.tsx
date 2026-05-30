import { Box, Typography, Chip, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'motion/react';

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C/C++']
    },
    {
      title: 'Frontend & Backend',
      skills: ['React (Redux Toolkit)', 'Node.js', 'Express', 'Spring Boot', 'Spring MVC', 'JPA/Hibernate', 'JWT', 'OAuth 2.0', 'Microservices']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'DynamoDB', 'MySQL', 'Oracle', 'Pinecone (Vector DB)']
    },
    {
      title: 'AI/ML',
      skills: ['LLM Integration', 'OpenAI API', 'RAG', 'PyTorch', 'scikit-learn', 'Sentence Transformers', 'FAISS', 'LSTM']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda, DynamoDB)', 'EventBridge', 'Amplify', 'RDS', 'CloudWatch', 'Docker', 'Jenkins']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Maven', 'IBM MQ', 'Jira', 'Postman', 'Swagger', 'IntelliJ IDEA', 'Agile/Scrum']
    }
  ];

  return (
    <Box id="skills" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom sx={{ mb: 6 }}>
          Technical Skills
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: 'none',
                  bgcolor: 'background.paper'
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 500,
                        px: 1,
                        py: 0.5,
                        bgcolor: isDark ? 'rgba(129, 140, 248, 0.08)' : 'rgba(99, 102, 241, 0.04)',
                        borderColor: isDark ? 'rgba(129, 140, 248, 0.25)' : 'rgba(99, 102, 241, 0.15)',
                        color: 'text.primary',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'secondary.main',
                          color: '#ffffff',
                          borderColor: 'secondary.main',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
