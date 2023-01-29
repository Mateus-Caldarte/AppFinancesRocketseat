import React from 'react';
import {StatusBar} from 'react-native';
import {Dashboard} from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
