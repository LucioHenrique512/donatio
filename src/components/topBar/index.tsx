import React from 'react';
import {Container, BackButton} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/core';

interface TopBarProps {
  onPressBackButton?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({onPressBackButton}) => {
  const {textColor} = useTheme();
  const {goBack} = useNavigation();
  return (
    <Container>
      <BackButton
        onPress={() => (onPressBackButton ? onPressBackButton() : goBack())}>
        <Icon
          name={'chevron-left'}
          color={textColor}
          size={RFPercentage(3.5)}
        />
      </BackButton>
    </Container>
  );
};
