import React from 'react';
import {Alert, Text} from 'react-native';
import {Button} from '../../../../components';
import {
  AppTitle,
  ButtonsContainer,
  Container,
  Image,
  ImageContainer,
} from './styles';

export const WellcomeScreen: React.FC = () => {
  return (
    <Container>
      <AppTitle>Donatio</AppTitle>
      <ImageContainer>
        <Image source={require('../../assets/happy_announcement.png')} />
      </ImageContainer>
      <ButtonsContainer>
        <Button
          text="Não tem conta, clique aqui."
          onPress={() => Alert.alert('teste', 'deu certo')}
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
