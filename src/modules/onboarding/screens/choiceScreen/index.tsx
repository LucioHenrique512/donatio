import React from 'react';
import {Button, ProgressBar, TopBar} from '../../../../components';
import {AccountTypeButton} from '../../components';
import {
  Container,
  StepTitle,
  ContentContainer,
  ButtonsContainer,
} from './styled';

const userTypes: any = {
  giver: {text: 'Doador', type: 'GIVER'},
  reciver: {text: 'Recebedor', type: 'RECIVER'},
};

export const ChoiceScreen: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <StepTitle>{'Informe seus\ndados de acesso para\ncontinuar'}</StepTitle>
      <ProgressBar percentage={66.66} />
      <ContentContainer>
        <ButtonsContainer>
          {Object.keys(userTypes).map(key => (
            <AccountTypeButton key={key} text={userTypes[key].text} />
          ))}
        </ButtonsContainer>
        <Button text="Continuar" onPress={() => {}} />
      </ContentContainer>
    </Container>
  );
};
