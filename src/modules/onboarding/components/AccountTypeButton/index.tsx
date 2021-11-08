import React from 'react';
import {Container, ContentContainer, IconContainer, Text} from './styles';
import {SmileEmoji} from '../../assets/emojis/smile';
import {StarEmoji} from '../../assets/emojis/star';

interface AccountTypeButtonProps {
  selected?: boolean;
  text?: string;
  onPress?: () => void;
}

export const AccountTypeButton: React.FC<AccountTypeButtonProps> = ({
  selected,
  onPress,
  text
}) => {
  return (
    <Container selected={selected} onPress={onPress}>
      <IconContainer>{selected ? <StarEmoji /> : <SmileEmoji />}</IconContainer>
      <ContentContainer>
        <Text selected={selected}>{text}</Text>
      </ContentContainer>
    </Container>
  );
};
