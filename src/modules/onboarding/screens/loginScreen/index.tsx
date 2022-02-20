import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, TextInput, TopBar} from '../../../../components';
import {OnboardingStackParamList} from '../../routes/routes';
import {
  BottomContainer,
  Container,
  ContentContainer,
  ForgotPasswordBtnContainer,
  ForgotPasswordBtnText,
  FormContainer,
  Image,
  ImageContainer,
  StepTitle,
} from './styles';

export type LoginScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'LoginScreen'
>;

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <Container>
      <TopBar />
      <StepTitle>Entrar</StepTitle>
      <ContentContainer>
        <ImageContainer>
          <Image source={require('../../assets/login.png')} />
        </ImageContainer>
        <FormContainer>
          <TextInput label="E-mail" keyboardType={'email-address'} />
          <TextInput
            label="Senha"
            secureTextEntry
            keyboardType={'email-address'}
          />
        </FormContainer>
      </ContentContainer>
      <BottomContainer>
        <Button text="Entrar" onPress={() => {}} />
        <ForgotPasswordBtnContainer>
          <ForgotPasswordBtnText>Esqueci minha senha.</ForgotPasswordBtnText>
        </ForgotPasswordBtnContainer>
      </BottomContainer>
    </Container>
  );
};
