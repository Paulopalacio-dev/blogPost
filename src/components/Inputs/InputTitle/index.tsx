import React, { useState } from 'react';
import { Container, InputText} from './styles';

type Props = {
  onChangeText: (value:string) => void;
}

export function InputTitle({onChangeText}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      <InputText
        onChangeText={onChangeText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholder="Título"
      />
    </Container>
  );
}