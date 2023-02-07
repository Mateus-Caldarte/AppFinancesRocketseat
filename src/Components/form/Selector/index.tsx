import React from 'react';
import {Container, Category, Icon} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function Selector({title, onPress}: Props) {
  return (
    <Container>
      <Category onPress={onPress}>{title}</Category>
      <Icon name="down" />
    </Container>
  );
}
