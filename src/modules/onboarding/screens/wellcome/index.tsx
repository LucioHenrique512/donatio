import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, Text} from 'react-native';
import {Button} from '../../../../components';
import {OnboardingStackParamList} from '../../routes/routes';
import {
  AppTitle,
  ButtonsContainer,
  Container,
  Image,
  ImageContainer,
} from './styles';

type WellcomeScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;

export const WellcomeScreen: React.FC<WellcomeScreenProps> = ({navigation}) => {
  return (
    <Container>
      <AppTitle>Donatio</AppTitle>
      <ImageContainer>
        <Image source={require('../../assets/happy_announcement.png')} />
      </ImageContainer>
      <ButtonsContainer>
        <Button
          text="Não tem usuário, clique aqui."
          onPress={() => navigation.navigate('RegisterFormScreen')}
        />
        <Button
          text="Entrar"
          outline
          onPress={() => Alert.alert('teste', 'deu certo')}
        />
      </ButtonsContainer>
    </Container>
  );
};
