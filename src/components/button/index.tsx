import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {Container, Text} from './style';

interface ButtonProps {
  text: string;
  onPress: () => void;
  outline?: boolean;
  marginBottom?: number;
  width?: number;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  width,
  marginBottom,
  outline,
  disabled,
  loading,
}) => {
  const {white} = useTheme();
  return (
    <Container
      outline={outline}
      width={width}
      marginBottom={marginBottom}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={white} />
      ) : (
        <Text outline={outline}>{text}</Text>
      )}
    </Container>
  );
};
