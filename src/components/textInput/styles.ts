import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TextFieldCommonStyleProps {
  error?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(13)}px;
  margin-bottom: ${RFPercentage(0.20)}px;
`;

export const Label = styled.Text`
  font-size: ${RFPercentage(1.7)}px;
  margin-bottom: ${RFPercentage(1)}px;
  color: ${({theme}) => theme.textColor};
`;

interface TextInputContainerProps extends TextFieldCommonStyleProps {}

export const TextInputContainer = styled.View<TextInputContainerProps>`
  width: 100%;
  height: ${RFPercentage(7)}px;
  background: ${({theme}) => theme.textInputColor};
  margin-bottom: ${RFPercentage(0.7)}px;
  border-radius: ${RFPercentage(1)}px;
  border-width: ${RFPercentage(0.1)}px;
  border-color: ${({theme, error}) =>
    error ? theme.error : `${theme.textColor}35`};
  justify-content: center;
`;

interface HelperTextProps extends TextFieldCommonStyleProps {}

export const HelperText = styled.Text<HelperTextProps>`
  font-size: ${RFPercentage(1.5)}px;
  color: ${({theme, error}) => (error ? theme.error : theme.textColor)};
`;

export const TextField = styled.TextInput`
  padding-left: ${RFPercentage(2)}px;
  font-size: ${RFPercentage(2.5)}px;
  color: ${({theme}) => theme.textColor};
`;
