import './App.css';
import React from 'react';
import Router from './routes';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  let theme = createTheme(
    {
      palette: {
        primary: {
          main: '#3F51B5',
        },
        background: {
          default: '#F5F6F6',
        },
      },
    }
  );

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
        <SidebarProvider>
          <Router />
        </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
