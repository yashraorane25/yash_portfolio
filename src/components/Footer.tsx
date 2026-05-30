import { Box, Typography, Container, Stack, Divider, Grid, useTheme } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box 
      sx={{ 
        bgcolor: isDark ? '#111625' : 'primary.main', 
        color: isDark ? 'text.primary' : 'white', 
        py: 8, 
        mt: 'auto',
        borderTop: isDark ? '1px solid rgba(129, 140, 248, 0.12)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: isDark ? 'secondary.main' : 'inherit' }}>
              YASH RAORANE
            </Typography>
            <Typography variant="body1" sx={{ color: isDark ? 'text.secondary' : 'rgba(255, 255, 255, 0.6)', maxWidth: 400 }}>
              Building the future of web and AI. Let's connect and create something amazing together.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { md: 'flex-end' }, alignItems: 'center' }}>
            <Stack direction="row" spacing={3}>
              <SocialLink href="https://github.com/yashraorane25" icon={<Github size={24} />} isDark={isDark} />
              <SocialLink href="https://linkedin.com/in/yashraorane" icon={<Linkedin size={24} />} isDark={isDark} />
              <SocialLink href="mailto:yashraorane25@gmail.com" icon={<Mail size={24} />} isDark={isDark} />
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: isDark ? 'divider' : 'rgba(255, 255, 255, 0.1)' }} />
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

function SocialLink({ href, icon, isDark }: { href: string; icon: React.ReactNode; isDark: boolean }) {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: isDark ? 'text.secondary' : 'rgba(255, 255, 255, 0.6)',
        transition: 'all 0.2s',
        '&:hover': {
          color: isDark ? 'secondary.main' : 'white',
          transform: 'translateY(-2px)'
        }
      }}
    >
      {icon}
    </Box>
  );
}
