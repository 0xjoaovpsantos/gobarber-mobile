import React from 'react';
import { Container, TextInput, Icon } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />

    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;
