import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Button, ProgressBar, TextInput, TopBar} from '../../../../components';
import {OnboardingStackParamList} from '../../routes/routes';
import {Container, StepTitle, FormContainer, ButtonContainer} from './styles';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {maskedInputPatterns} from '../../../../utils';

type RegisterFormScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Favor informe o seu nome.')
    .test('fullName', 'Favor informe seu nome e sobrenome.', value => {
      const valueArray = `${value}`.split(' ');
      const validation =
        valueArray.length > 1 && valueArray[1].split('').length > 1;
      return validation;
    }),
  email: yup
    .string()
    .email('Favor insira um email válido')
    .required('Favor informe o email da sua conta.'),
  phoneNumber: yup
    .string()
    .min(11, 'Favor informe um telefone válido.')
    .required('Favor insira o seu telefone com  whatsapp.'),
  password: yup
    .string()
    .required('Favor insira a senha')
    .min(6, 'A senha deve conter no minimo 6 digitos.'),
  passwordConfirmation: yup
    .string()
    .required('Favor confirme a sua senha.')
    .test('passwordMatch', 'As senhas não coincidem.', (value, context) => {
      const {password} = context.parent;
      if (!!value && !!password) return password === value;
      else return false;
    }),
});

export const RegisterFormScreen: React.FC<RegisterFormScreenProps> = ({}) => {
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
        console.log(values.phoneNumber.length);
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
          <Button text={'CONTINUAR'} onPress={handleSubmit} />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};
