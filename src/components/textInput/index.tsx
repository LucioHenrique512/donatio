import React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {
  Container,
  HelperText,
  Label,
  TextField,
  TextInputContainer,
} from './styles';

interface TextInputProps {
  label?: string;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value?: string;
  helperText?: string;
  error?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  error,
  helperText,
  label,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInputContainer error={error}>
        <TextField onChange={onChange} value={value} />
      </TextInputContainer>
      <HelperText error={error}>{helperText}</HelperText>
    </Container>
  );
};
