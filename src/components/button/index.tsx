import React from 'react';
import {Container, Text} from './style';

interface ButtonProps {
  text: string;
  onPress: () => void;
  outline?: boolean;
  marginBottom?: number;
  width?: number;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  width,
  marginBottom,
  outline,
}) => {
  return (
    <Container
      outline={outline}
      width={width}
      marginBottom={marginBottom}
      onPress={onPress}>
      <Text outline={outline}>{text}</Text>
    </Container>
  );
};
