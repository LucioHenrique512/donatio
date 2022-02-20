import React, {useState} from 'react';

import {Button, ProgressBar, TextInput, TopBar} from '../../../../components';
import {Container, StepTitle, FormContainer, ButtonContainer} from './styles';
import {useFormik} from 'formik';
import {RegisterFormScreenProps, validationSchema} from './types';
import {maskedInputPatterns, showToast} from '../../../../utils';
import {createUser} from '../../services/firebase';
import {Alert} from 'react-native';
import {fireBaseErrorCodes} from '../../../../services/firebase';
import {useOnboardingContext} from '../../context';

export const RegisterFormScreen: React.FC<RegisterFormScreenProps> = ({
  navigation,
}) => {
  const {setUserPayload, setNewUserId} = useOnboardingContext();
  const [loading, setLoading] = useState<boolean>();

  const handleError = (errorCode?: string) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        showToast({
          type: 'error',
          text1: 'Esse email já está em uso.',
        });
        break;
      default:
        showToast({
          type: 'error',
          text1: 'Ocorreu um erro inesperado, por favor tente mais tarde.',
        });
        break;
    }
  };

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirmation: '',
      },
      validationSchema,
      onSubmit: values => {
        setLoading(true);
        createUser(
          values,
          error => {
            setLoading(false);
            handleError(error.code);
          },
          userId => {
            setLoading(false);
            setNewUserId(userId);
            navigation.push('ChoiceScreen');
          },
        );
      },
    });

  return (
    <Container behavior={'height'}>
      <TopBar />
      <StepTitle>{'Informe seus\ndados de acesso para\ncontinuar'}</StepTitle>
      <ProgressBar percentage={33.33} />
      <FormContainer>
        <TextInput
          label="Nome Completo"
          value={values.fullName}
          onChangeText={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          error={!!errors.fullName && touched.fullName}
          helperText={
            !!touched.fullName && !!errors.fullName ? errors.fullName : ''
          }
        />

        <TextInput
          label="E-mail"
          value={values.email}
          keyboardType={'email-address'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={!!errors.email && touched.email}
          helperText={!!touched.email && !!errors.email ? errors.email : ''}
        />

        <TextInput
          label="Telefone com whatsapp"
          value={values.phoneNumber}
          onChangeText={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
          mask={maskedInputPatterns.phoneNumber}
          error={!!errors.phoneNumber && touched.phoneNumber}
          helperText={
            !!touched.phoneNumber && !!errors.phoneNumber
              ? errors.phoneNumber
              : ''
          }
        />

        <TextInput
          label="Senha"
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          secureTextEntry
          error={!!errors.password && touched.password}
          helperText={
            !!touched.password && !!errors.password ? errors.password : ''
          }
        />

        <TextInput
          label="Confirmação de senha"
          value={values.passwordConfirmation}
          onChangeText={handleChange('passwordConfirmation')}
          onBlur={handleBlur('passwordConfirmation')}
          secureTextEntry
          error={!!errors.passwordConfirmation && touched.passwordConfirmation}
          helperText={
            !!touched.passwordConfirmation && !!errors.passwordConfirmation
              ? errors.passwordConfirmation
              : ''
          }
        />

        <ButtonContainer>
          <Button
            text={'CONTINUAR'}
            loading={loading}
            disabled={Object.keys(errors).length !== 0}
            onPress={handleSubmit}
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};
