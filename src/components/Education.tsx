import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      institution: 'Clemson University',
      location: 'Clemson, United States',
      degree: 'Masters of Science (MS) in Computer Science',
      gpa: 'GPA: 3.96/4.0',
      period: 'Aug 2024 – May 2026',
      coursework: 'Artificial Intelligence, Cloud Computing, Statistical Implementation, DDoS, Machine Learning: Impl & Eval, DBMS, Reinforcement Learning'
    },
    {
      institution: 'Mumbai University',
      location: 'Mumbai, India',
      degree: 'Bachelor of Engineering (BE) in Computer Engineering',
      gpa: 'GPA: 8.07/10',
      period: 'July 2015 – May 2019',
      coursework: 'Data Structures & Algorithms, Object Oriented Programming, Software Engineering, Database Management Systems, Computer Networks'
    }
  ];

  return (
    <Box id="education" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom sx={{ mb: 6 }}>
          Education
        </Typography>

        <Paper
          sx={{
            p: 4,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: 'none',
            bgcolor: 'background.paper'
          }}
        >
          {educations.map((edu, idx) => (
            <Box key={idx}>
              <Grid container spacing={4} sx={{ alignItems: 'flex-start', py: idx > 0 ? 3 : 0, pb: idx < educations.length - 1 ? 3 : 0 }}>
                <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>
                  <Box sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(99, 102, 241, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'secondary.main'
                  }}>
                    <GraduationCap size={32} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 10 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>{edu.institution}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>{edu.location}</Typography>
                      <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600 }}>{edu.degree}</Typography>
                    </Box>
                    <Box sx={{ textAlign: { md: 'right' } }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{edu.gpa}</Typography>
                      <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>Key Focus / Coursework:</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.coursework}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {idx < educations.length - 1 && <Divider sx={{ borderColor: 'divider' }} />}
            </Box>
          ))}
        </Paper>
      </motion.div>
    </Box>
  );
}

