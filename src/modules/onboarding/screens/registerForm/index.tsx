import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ProgressBar, TopBar} from '../../../../components';
import {OnboardingStackParamList} from '../../routes/routes';
import {Container, StepTitle} from './styles';

type RegisterFormScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;

export const RegisterFormScreen: React.FC<RegisterFormScreenProps> = ({}) => {
  return (
    <Container behavior={'padding'}>
      <TopBar />
      <StepTitle>{'Informe seus\ndados de acesso para\ncontinuar'}</StepTitle>
      <ProgressBar percentage={50} />
    </Container>
  );
};
