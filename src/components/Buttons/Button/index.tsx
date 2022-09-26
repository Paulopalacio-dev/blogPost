import React, { useState } from 'react';
import { TouchableOpacity} from 'react-native';
import { Container, Title } from './styles';

type Props = {
  title: string;
  onPress?: VoidFunction;
}

export function Button({ title, onPress, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);


  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
  }

  return (
    <Container
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
    isFocused={isFocused} {...rest}
    >
    <TouchableOpacity onPress={onPress}>
   
      <Title>
        {title}
      </Title>
    
    </TouchableOpacity>
    </Container>
  );
}