import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WellcomeScreen} from '../screens';

export const OnboardingNavigation: React.FC = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name={onboardingScreenNames.wellcome}
        component={WellcomeScreen}
      />
    </MainStack.Navigator>
  );
};

export const onboardingScreenNames = {
  wellcome: 'wellcome',
};
