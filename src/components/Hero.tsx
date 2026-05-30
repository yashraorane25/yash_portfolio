import { Box, Typography, Button, Container, Stack, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, User, Sparkles, Code2, Globe } from 'lucide-react';
import { useState } from 'react';
// @ts-ignore
import yashPhoto from '../assets/Yash_Image.png';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box 
      sx={{ 
        pt: { xs: 10, md: 16 }, 
        pb: { xs: 10, md: 12 },
        background: 'radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Brief Bio and Info */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
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
                    fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                    mb: 3,
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em'
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
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  I am a Full-Stack Software Engineer with 5+ years of experience and an MS in Computer Science graduate from Clemson University. I specialize in crafting high-impact frontend interfaces and scalable, intelligent backend systems.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
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
                      borderRadius: 2,
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      }
                    }}
                  >
                    Contact Me
                  </Button>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <IconButton href="https://github.com/yashraorane25" icon={<Github size={24} />} />
                    <IconButton href="https://linkedin.com/in/yashraorane" icon={<Linkedin size={24} />} />
                    <IconButton href="mailto:yashraorane25@gmail.com" icon={<Mail size={24} />} />
                  </Stack>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column: Polished Visual Placeholder for Photo */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: '100%', maxWidth: 380 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)'
                    : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: isDark 
                    ? '1px solid rgba(255, 255, 255, 0.08)'
                    : '1px solid rgba(99, 102, 241, 0.12)',
                  boxShadow: isDark
                    ? '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1)'
                    : '0 20px 40px rgba(99, 102, 241, 0.06), inset 0 1px 1px rgba(255,255,255,0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: isDark
                      ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)'
                      : 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none'
                  }
                }}
              >
                {/* Tech background animation details */}
                <Box sx={{ position: 'absolute', inset: 0, opacity: isDark ? 0.2 : 0.4, pointerEvents: 'none' }}>
                  <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', border: isDark ? '1px dashed rgba(255,255,255,0.15)' : '1px dashed rgba(99, 102, 241, 0.15)', borderRadius: '50%' }} />
                  <Box sx={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', border: isDark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(99, 102, 241, 0.1)', borderRadius: '50%' }} />
                </Box>

                {/* Animated Floating Badges */}
                <Box
                  component={motion.div}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  sx={{
                    position: 'absolute',
                    top: '12%',
                    left: '8%',
                    bgcolor: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)',
                    backdropFilter: 'blur(4px)',
                    border: isDark ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(99, 102, 241, 0.2)',
                    p: 1,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Code2 size={16} style={{ color: isDark ? '#818cf8' : '#4f46e5' }} />
                  <Typography variant="caption" sx={{ color: isDark ? '#c7d2fe' : '#4f46e5', fontWeight: 600 }}>Full-Stack</Typography>
                </Box>

                <Box
                  component={motion.div}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                  sx={{
                    position: 'absolute',
                    bottom: '22%',
                    right: '6%',
                    bgcolor: isDark ? 'rgba(244, 63, 94, 0.15)' : 'rgba(244, 63, 94, 0.08)',
                    backdropFilter: 'blur(4px)',
                    border: isDark ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(244, 63, 94, 0.2)',
                    p: 1,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Sparkles size={16} style={{ color: isDark ? '#fb7185' : '#e11d48' }} />
                  <Typography variant="caption" sx={{ color: isDark ? '#ffe4e6' : '#e11d48', fontWeight: 600 }}>AI Eng</Typography>
                </Box>

                {/* Avatar Photo / Silhouette Fallback */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 130,
                    height: 130,
                    borderRadius: '50%',
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: isDark 
                      ? '2px solid rgba(99, 102, 241, 0.4)'
                      : '2px solid rgba(99, 102, 241, 0.25)',
                    boxShadow: isDark
                      ? '0 0 20px rgba(99, 102, 241, 0.2)'
                      : '0 0 20px rgba(99, 102, 241, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    overflow: 'hidden'
                  }}
                >
                  {!imageError ? (
                    <Box
                      component="img"
                      src={yashPhoto}
                      alt="Yash Umesh Raorane"
                      onError={() => setImageError(true)}
                      referrerPolicy="no-referrer"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <User size={64} style={{ color: isDark ? '#a5b4fc' : '#6366f1', opacity: 0.8 }} />
                  )}
                </Box>

                {/* Interactive labels & details */}
                <Typography variant="h6" sx={{ color: isDark ? '#f1f5f9' : 'text.primary', fontWeight: 700, mb: 0.5 }}>
                  Yash Umesh Raorane
                </Typography>
                <Typography variant="body2" sx={{ color: isDark ? '#94a3b8' : 'text.secondary', mb: 2, fontSize: '0.85rem' }}>
                  MS Computer Science @ Clemson
                </Typography>

                {/* Actionable Tip/Guide details */}
                {/*<Box
                  sx={{
                    mt: 'auto',
                    width: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px dashed rgba(255, 255, 255, 0.12)',
                    borderRadius: 2,
                    p: 1.5,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Photo Placeholder
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 500, fontSize: '0.72rem', display: 'block' }}>
                    Replace with your photo in /src/components/Hero.tsx
                  </Typography>
                </Box>*/}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
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

