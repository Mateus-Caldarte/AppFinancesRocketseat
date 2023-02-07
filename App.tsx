import React from 'react';
import {Register} from './src/screens/Register';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
