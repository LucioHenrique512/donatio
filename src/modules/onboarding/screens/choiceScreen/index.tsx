import React from 'react';
import {Button, ProgressBar, TopBar} from '../../../../components';
import {UserTypes} from '../../../../types/userType';
import {AccountTypeButton} from '../../components';
import {useOnboardingContext} from '../../context';
import {
  Container,
  StepTitle,
  ContentContainer,
  ButtonsContainer,
} from './styled';

type UserTypesProps = {
  giver: {text: string; type: UserTypes};
  reciver: {text: string; type: UserTypes};
};

const userTypesObject: UserTypesProps = {
  giver: {text: 'Doador', type: 'GIVER'},
  reciver: {text: 'Recebedor', type: 'RECIVER'},
};

export const ChoiceScreen: React.FC = () => {
  const {userPayload, setUserType} = useOnboardingContext();

  return (
    <Container>
      <TopBar />
      <StepTitle>{'Informe seus\ndados de acesso para\ncontinuar'}</StepTitle>
      <ProgressBar percentage={66.66} />
      <ContentContainer>
        <ButtonsContainer>
          <AccountTypeButton
            text={userTypesObject.giver.text}
            selected={userTypesObject.giver.type === userPayload?.type}
            onPress={() => {
              setUserType(userTypesObject.giver.type);
            }}
          />
          <AccountTypeButton
            text={userTypesObject.reciver.text}
            selected={userTypesObject.reciver.type === userPayload?.type}
            onPress={() => {
              setUserType(userTypesObject.reciver.type);
            }}
          />
        </ButtonsContainer>
        <Button text="Continuar" onPress={() => {}} />
      </ContentContainer>
    </Container>
  );
};
