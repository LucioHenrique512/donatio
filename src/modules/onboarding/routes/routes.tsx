import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterFormScreen, WellcomeScreen} from '../screens';

export type OnboardingStackParamList = {
  Wellcome: undefined;
  RegisterFormScreen: undefined;
};

export const OnboardingNavigation: React.FC = () => {
  const MainStack = createNativeStackNavigator<OnboardingStackParamList>();
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Wellcome'}>
      <MainStack.Screen name={'Wellcome'} component={WellcomeScreen} />
      <MainStack.Screen
        name={'RegisterFormScreen'}
        component={RegisterFormScreen}
      />
    </MainStack.Navigator>
  );
};
