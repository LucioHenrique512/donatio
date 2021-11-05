import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import TextInputMask from 'react-native-text-input-mask';
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
  mask?: string;
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
  mask,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInputContainer error={error}>
        {!!mask ? (
          <TextInputMask
            keyboardType={keyboardType}
            style={{marginLeft: RFPercentage(2), height: '100%'}}
            onChangeText={(_, extracted) => {
              onChangeText && onChangeText(`${extracted}`);
            }}
            mask={mask}
          />
        ) : (
          <TextField
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
        )}
      </TextInputContainer>
      <HelperText error={error}>{helperText}</HelperText>
    </Container>
  );
};
