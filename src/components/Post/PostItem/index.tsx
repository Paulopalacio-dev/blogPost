import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


import { Container, Text, Title, Header } from './styles';

export type Props = {
  id: number,
  title: string,
  body: string,
};

export function PostItem({id, title, body}: Props ) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <TouchableOpacity>
         <Icon name="delete" size={25} color={'#f10f35'}/>
        </TouchableOpacity>
      </Header>
      <Text>{body}</Text>
    </Container>
  );
}