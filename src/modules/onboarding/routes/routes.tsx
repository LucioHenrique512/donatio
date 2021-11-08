import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterFormScreen, WellcomeScreen,ChoiceScreen} from '../screens';

export type OnboardingStackParamList = {
  Wellcome: undefined;
  RegisterFormScreen: undefined;
  ChoiceScreen:undefined;
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
      <MainStack.Screen
       name={"ChoiceScreen"}
       component={ChoiceScreen}
      />
    </MainStack.Navigator>
  );
};
