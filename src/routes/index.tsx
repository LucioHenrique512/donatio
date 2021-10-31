import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingModule} from '../modules';
import {navigationTheme} from '../styles/navigationTheme';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={moduleNames.onboarding}
          component={OnboardingModule}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const moduleNames = {
  onboarding: 'onboarding',
};
