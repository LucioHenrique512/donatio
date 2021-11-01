import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {scrennPadding} from '../../../../constants/sizes';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({theme}) => theme.background};
  padding: 0px ${scrennPadding}px;
`;

export const StepTitle = styled.Text`
  font-size: ${RFPercentage(3.3)}px;
  margin-top: ${RFPercentage(2.5)}px;
  font-weight: 700;
  color: ${({theme}) => theme.textColor};
`;
