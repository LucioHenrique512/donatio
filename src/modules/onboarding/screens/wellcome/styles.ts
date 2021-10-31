import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {scrennPadding} from '../../../../constants/sizes';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${scrennPadding}px;
`;

export const AppTitle = styled.Text`
  margin-top: ${RFPercentage(4)}px;
  font-size: ${RFPercentage(4.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.textColor};
`;

export const ImageContainer = styled.View``;

export const Image = styled.Image``;

export const ButtonsContainer = styled.View`
  width: 100%;
`;
