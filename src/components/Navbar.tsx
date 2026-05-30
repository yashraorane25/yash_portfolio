import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useScrollTrigger } from '@mui/material';
import { motion, useScroll, useSpring } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useThemeMode } from '../ThemeContext';

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div
        id="scroll-progress-bar"
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: mode === 'dark' ? '#818cf8' : '#6366f1',
          zIndex: 1500,
        }}
      />
      <AppBar 
        position="sticky" 
        elevation={trigger ? 2 : 0}
        sx={{ 
          backgroundColor: trigger 
            ? (mode === 'dark' ? 'rgba(10, 14, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)') 
            : 'transparent',
          backdropFilter: trigger ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease',
          color: 'text.primary',
          borderBottom: trigger ? '1px solid' : 'none',
          borderColor: 'divider',
          mt: '4px', // Shift navbar down slightly to accommodate progress bar if needed, or keep top at 0
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              sx={{ fontWeight: 800, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Yash Umesh Raorane
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                {navItems.map((item, index) => (
                  <Button
                    key={item.id}
                    component={motion.button}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ 
                      color: 'text.primary',
                      '&:hover': { color: 'secondary.main' }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Enhanced Interactive Theme Toggle */}
              <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="Toggle structural theme mode"
                sx={{ 
                  p: 1, 
                  borderRadius: 2, 
                  border: '1px solid', 
                  borderColor: 'divider',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    bgcolor: mode === 'dark' ? 'rgba(129, 140, 248, 0.08)' : 'rgba(99, 102, 241, 0.08)',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {mode === 'dark' ? (
                  <Sun size={18} style={{ color: '#fbbf24' }} />
                ) : (
                  <Moon size={18} style={{ color: '#4f46e5' }} />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
