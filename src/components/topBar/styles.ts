import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {scrennPadding} from '../../constants/sizes';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(7)}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${RFPercentage(1.5)}px;
`;

export const BackButton = styled.TouchableOpacity``;
