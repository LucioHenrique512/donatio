import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');

export const OverlayContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
  background: ${({theme}) => theme.primary};
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled(Animated.View)``;

export const MainText = styled.Text`
  font-size: ${RFPercentage(6)}px;
  text-align: center;
  font-weight: bold;
  color: ${({theme}) => theme.white};
  margin-top: ${RFPercentage(3)}px;
`;

export const SecondaryText = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  text-align: center;
  font-weight: 300;
  color: ${({theme}) => theme.white};
  margin-top: ${RFPercentage(2)}px;
`;
