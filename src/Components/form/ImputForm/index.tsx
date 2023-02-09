import React from 'react';
import {Container} from './styles';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function ImputForm({control, name, ...rest}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input {...rest} onChange={onChange} value={value} />
        )}
        name={name}
      />
    </Container>
  );
}
