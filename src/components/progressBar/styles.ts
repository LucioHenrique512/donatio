import {Animated} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(1.5)}px;
  background: ${({theme}) => theme.textColor}1e;
  margin-top: ${RFPercentage(2)}px;
  border-radius: ${RFPercentage(2) / 2}px;
  position: relative;
  overflow: hidden;
`;

export const ProgressIndicator = styled(Animated.View)`
  width: 100%;
  height: ${RFPercentage(1.5)}px;
  background: ${({theme}) => theme.primary};
  border-radius: ${RFPercentage(2) / 2}px;
  position: absolute;
`;
