/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import { getTheme } from './theme';
import { ThemeModeProvider, useThemeMode } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function MainAppContent() {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Navbar />
        <Box component="main">
          <Hero />
          <Container maxWidth="lg">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeModeProvider>
      <MainAppContent />
    </ThemeModeProvider>
  );
}

