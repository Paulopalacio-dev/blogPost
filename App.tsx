import React from 'react'
import { Home } from "./src/screens/Home";

import { ThemeProvider } from 'styled-components/native'
import THEME from './src/theme';


export default function App() {
  return (

    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
  );
}

