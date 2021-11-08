import React from 'react';
import {OnboardingNavigation} from './routes';
import {OnboardingContextProvider} from '../context';

export const OnboardingModule: React.FC = () => {
  return (
    <OnboardingContextProvider>
      <OnboardingNavigation />
    </OnboardingContextProvider>
  );
};
