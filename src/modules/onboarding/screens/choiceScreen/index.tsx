import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Button,
  ProgressBar,
  TopBar,
  useTransitionOverlay,
} from '../../../../components';
import {UserType, UserTypes} from '../../../../types/userType';
import {AccountTypeButton} from '../../components';
import {useOnboardingContext} from '../../context';
import {OnboardingStackParamList} from '../../routes/routes';
import {updateUser} from '../../services/firebase';
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

export type ChoiceScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;

export const ChoiceScreen: React.FC<ChoiceScreenProps> = ({navigation}) => {
  const {userPayload, setUserType, newUserId} = useOnboardingContext();
  const [loading, setLoading] = useState(false);
  const {showOverlay} = useTransitionOverlay();

  const onSubmitUser = (userPayload?: UserType) => {
    // console.log(userPayload, newUserId);
    setLoading(true);
    updateUser(newUserId, 'type', `${userPayload?.type}`)
      .then(() => {
        setLoading(false);
        navigation.navigate('LoginScreen');
        showOverlay({
          iconName: 'check',
          mainText: 'Tudo certo!',
          secondaryText:
            'Usuário registrado com sucesso\nfavor realize o login para começar. 😍',
          duration: 3000,
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <TopBar />
      <StepTitle>{'Como você\nvai usar o app?'}</StepTitle>
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
        <Button
          text="Continuar"
          loading={loading}
          disabled={!userPayload?.type}
          onPress={() => {
            onSubmitUser(userPayload);
          }}
        />
      </ContentContainer>
    </Container>
  );
};
