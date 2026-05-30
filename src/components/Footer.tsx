import { Box, Typography, Container, Stack, Divider, Grid, useTheme } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box 
      sx={{ 
        bgcolor: isDark ? '#111625' : '#f8fafc', 
        color: 'text.primary', 
        py: 8, 
        mt: 'auto',
        borderTop: isDark ? '1px solid rgba(129, 140, 248, 0.12)' : '1px solid #e2e8f0',
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'secondary.main' }}>
              YASH UMESH RAORANE
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 400 }}>
              Building the future of web and AI. Let's connect and create something amazing together.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { md: 'flex-end' }, alignItems: 'center' }}>
            <Stack direction="row" spacing={3}>
              <SocialLink href="https://github.com/yashraorane25" icon={<Github size={24} />} />
              <SocialLink href="https://linkedin.com/in/yashraorane" icon={<Linkedin size={24} />} />
              <SocialLink href="mailto:yashraorane25@gmail.com" icon={<Mail size={24} />} />
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'divider' }} />
        {/*<Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: isDark ? 'text.secondary' : 'rgba(255, 255, 255, 0.4)' }}>
            © {new Date().getFullYear()} Yash Umesh Raorane. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: isDark ? 'text.secondary' : 'rgba(255, 255, 255, 0.4)' }}>
            Built with React & Material UI
          </Typography>
        </Box>*/}
      </Container>
    </Box>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: 'text.secondary',
        transition: 'all 0.2s',
        '&:hover': {
          color: 'secondary.main',
          transform: 'translateY(-2px)'
        }
      }}
    >
      {icon}
    </Box>
  );
}
