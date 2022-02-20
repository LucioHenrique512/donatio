import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {scrennPadding} from '../../../../constants/sizes';

export const Container = styled.View`
  flex: 1;
  padding: 0px ${scrennPadding}px;
  background: ${({theme}) => theme.background};
`;

export const StepTitle = styled.Text`
  font-size: ${RFPercentage(3.3)}px;
  margin-top: ${RFPercentage(2.5)}px;
  font-weight: 700;
  color: ${({theme}) => theme.textColor};
`;

export const ContentContainer = styled.View`
  flex: 0.8;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(4)}px;
`;

export const Image = styled.Image``;

export const FormContainer = styled.View`
  margin-bottom: ${RFPercentage(4)}px;
`;

export const BottomContainer = styled.View`
  flex: 0.2;
`;

export const ForgotPasswordBtnContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordBtnText = styled.Text`
  font-weight: 700;
  color: ${({theme}) => theme.primary};
  font-size: ${RFPercentage(2)}px;
`;
