import React, {useState, useCallback} from 'react';
import {  Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Title, Container, View, ModalView, Header  } from './styles';
import  {InputTitle}  from '../Inputs';
import { InputText } from '../Inputs';
import { Button } from '../Buttons';
import { usePost } from '../../hooks';

type Props = {
  isVisible: boolean;
  onClose: VoidFunction;
  onSubmit: (id: number, title: string, body:string) => void;
 }

export function ModalAddPost({isVisible, onClose}: Props){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] = useState();
  const {createPost, getAllPosts} = usePost()
  
  const handleNewPost = useCallback(async () =>{
    await createPost({title: title, body: body})
    await getAllPosts()
  }, [createPost, title, body, getAllPosts])
  

  return (
    <Container>
        <Modal
          animationType="slide"
          transparent
          visible={isVisible}
        >
          <Container>
            <ModalView>
              <Header>
                <Icon name="add" size={25} color={'#444444'}/>
                <Title>Adicionar novo Post</Title>
              </Header>
              <InputTitle
              onChangeText={setTitle}/>
              <InputText
              onChangeText={setBody}
              />
               <View>
                <Button
                  title="Cancelar"
                  onPress={onClose}
                />
                <Button
                  title="Adicionar"
                  onPress={handleNewPost}
                />
                </View>
            </ModalView>
          
          </Container>
        </Modal>
      </Container>
  );
}