import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {WellcomeScreen} from './modules/onboarding/screens';
import {Routes} from './routes';
import {Container} from './styles/globalStyle';
import {darkTheme, lightTheme} from './styles/themes';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
