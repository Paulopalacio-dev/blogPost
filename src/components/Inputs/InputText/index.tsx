import React, { useState } from 'react';
import { Container,Input} from './styles';

type Props = {
  onChangeText: (label: string) => void;
}

export function InputText({onChangeText}:Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      
      <Input
       onChangeText={onChangeText}
        multiline={true}
        numberOfLines={5}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholder="Texto"
      />
   
 
    </Container>
     

  );
}