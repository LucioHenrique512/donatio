import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type AccountTypeButtonStyleProps = {
  selected?: boolean;
};

interface ContainerProps extends AccountTypeButtonStyleProps {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: ${RFPercentage(15)}px;
  background: ${({theme, selected}) =>
    selected ? theme.primary : theme.white};
  border-width: ${RFPercentage(0.2)}px;
  border-color: ${({theme}) => theme.textColor}45;
  margin-top: ${RFPercentage(5)}px;
  border-radius: ${RFPercentage(1.3)}px;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  flex: 0.35;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 0.65;
  justify-content: center;
`;

interface TextProps extends AccountTypeButtonStyleProps {}

export const Text = styled.Text<TextProps>`
  color: ${({theme, selected}) => (selected ? theme.white : theme.textColor)};
  font-size: ${RFPercentage(3.5)}px;
  font-weight: 600;
`;
