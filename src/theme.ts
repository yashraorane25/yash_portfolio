import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1a1a1a' : '#f8fafc',
    },
    secondary: {
      main: mode === 'light' ? '#6366f1' : '#818cf8', // Radiant Indigo for Cyber Slate glow
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#0a0e17', // Obsidian deep space cyber slate background
      paper: mode === 'light' ? '#f9fafb' : '#111625', // Clean elevated dark container blocks
    },
    text: {
      primary: mode === 'light' ? '#111827' : '#f1f5f9',
      secondary: mode === 'light' ? '#4b5563' : '#94a3b8',
    },
    divider: mode === 'light' ? '#e5e7eb' : 'rgba(129, 140, 248, 0.12)', // Delicate glow outline divider in dark mode
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'light' 
            ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            : '0 8px 30px rgba(0, 0, 0, 0.4)',
          border: mode === 'light' 
            ? '1px solid #e5e7eb' 
            : '1px solid rgba(129, 140, 248, 0.15)', // Premium dark cyan/indigo container borders
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

