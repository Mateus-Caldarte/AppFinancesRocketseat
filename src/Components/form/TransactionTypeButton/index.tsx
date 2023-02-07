import React from 'react';
import {Container, Icon, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

const icon = {
  up: 'arrow-up',
  down: 'arrow-down',
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({title, type, isActive, ...rest}: Props) {
  return (
    <Container type={type} {...rest} isActive={isActive}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
