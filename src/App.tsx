import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Routes} from './routes';
import {Container} from './styles/globalStyle';
import {darkTheme, lightTheme} from './styles/themes';
import Toast from 'react-native-toast-message';
import {TransitionOverlay} from './components';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <TransitionOverlay>
          <Routes />
        </TransitionOverlay>
        <Toast />
      </Container>
    </ThemeProvider>
  );
};

export default App;
