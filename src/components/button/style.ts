import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  outline?: boolean;
  width?: number;
  marginBottom?: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({theme, outline, disabled}) =>
    outline ? 'transparent' : disabled ? `${theme.primary}65` : theme.primary};
  width: ${({width}) => (width ? width : '100%')};
  height: ${RFPercentage(8)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? marginBottom : RFPercentage(2.5)}px;
  border-radius: ${RFPercentage(1)}px;
  border-color: ${({theme, disabled}) =>
    disabled ? `${theme.primary}65` : theme.primary};
  border-width: ${({outline}) => (outline ? RFPercentage(0.5) : 0)}px;
`;

interface TextProps {
  outline?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${RFPercentage(2.5)}px;
  color: ${({theme, outline}) => (outline ? theme.primary : theme.white)};
  font-weight: bold;
`;
