import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Routes} from './routes';
import { initializeFirebaseApp } from './services/firebase';
import {Container} from './styles/globalStyle';
import {darkTheme, lightTheme} from './styles/themes';

const App = () => {
  const colorScheme = useColorScheme();
  initializeFirebaseApp()
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
