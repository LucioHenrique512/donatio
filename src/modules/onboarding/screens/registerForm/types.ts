import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
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

import {OnboardingStackParamList} from '../../routes/routes';

export type RegisterFormScreenProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'Wellcome'
>;
