import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
} from 'react-native';
import {
  Container,
  HelperText,
  Label,
  TextField,
  TextInputContainer,
} from './styles';

interface TextInputProps {
  label?: string;
  onChangeText?: (event: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  helperText?: string;
  error?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  keyboardType,
  error,
  helperText,
  label,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInputContainer error={error}>
        <TextField
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </TextInputContainer>
      <HelperText error={error}>{helperText}</HelperText>
    </Container>
  );
};
