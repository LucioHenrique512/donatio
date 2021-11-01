import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Button, ProgressBar, TextInput, TopBar} from '../../../../components';
import {OnboardingStackParamList} from '../../routes/routes';
import {Container, StepTitle, FormContainer} from './styles';

type RegisterFormScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;

export const RegisterFormScreen: React.FC<RegisterFormScreenProps> = ({}) => {
  return (
    <Container behavior={'padding'} keyboardVerticalOffset={RFPercentage(3)}>
      <TopBar />
      <StepTitle>{'Informe seus\ndados de acesso para\ncontinuar'}</StepTitle>
      <ProgressBar percentage={50} />
      <FormContainer>
        <TextInput label="Nome Completo" />
        <TextInput label="E-mail" error helperText="Insira um email" />
        <TextInput label="Celular com whatsapp" />
        <TextInput label="Senha" />
        <TextInput label="Confirmação de senha" />
        <Button text={'CONTINUAR'} onPress={() => {}} />
      </FormContainer>
    </Container>
  );
};
