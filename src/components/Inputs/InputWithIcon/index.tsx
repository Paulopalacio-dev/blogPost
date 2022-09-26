import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button, InputText} from './styles';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  onPress: VoidFunction;
}

export function InputWithIcon({icon, value, onPress, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }


  return (
    <Container isFocused={isFocused}>
      <InputText
        onPress={onPress}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
      <Button  isFocused={isFocused}>
        <Icon 
        name={icon}
        size={24}
        color={(isFocused || isFilled) ? '#00C100' : '#AEAEB3'} />
      </Button>
    </Container>
     

  );
}