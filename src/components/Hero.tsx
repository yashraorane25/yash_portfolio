import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <Box 
      sx={{ 
        pt: { xs: 10, md: 20 }, 
        pb: { xs: 10, md: 15 },
        background: 'radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'secondary.main', 
                fontWeight: 700, 
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              SOFTWARE ENGINEER & AI ENTHUSIAST
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '5rem' },
                mb: 3,
                lineHeight: 1.1
              }}
            >
              Building intelligent systems and <Box component="span" sx={{ color: 'secondary.main' }}>scalable</Box> web experiences.
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary', 
                mb: 5, 
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 600
              }}
            >
              I'm Yash, a Full-Stack Software Engineer with 5+ years of experience and a Graduate Student at Clemson University specializing in building robust backend services, scalable microservices, and intelligent AI integrations.
            </Typography>
          </motion.div>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<FileText size={20} />}
              href="mailto:yashraorane25@gmail.com"
              sx={{ 
                bgcolor: 'primary.main',
                px: 4,
                py: 1.5,
                borderRadius: 2
              }}
            >
              Contact Me
            </Button>
            <Stack direction="row" spacing={1}>
              <IconButton href="https://github.com/yashraorane25" icon={<Github size={24} />} />
              <IconButton href="https://linkedin.com/in/yashraorane" icon={<Linkedin size={24} />} />
              <IconButton href="mailto:yashraorane25@gmail.com" icon={<Mail size={24} />} />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function IconButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: 'secondary.main',
          color: 'secondary.main',
          transform: 'translateY(-2px)',
          bgcolor: 'rgba(99, 102, 241, 0.05)'
        }
      }}
    >
      {icon}
    </Box>
  );
}
