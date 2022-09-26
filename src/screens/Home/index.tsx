import { useReducer, useEffect, useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native'
import { ButtonAdd } from '../../components/';
import {InputWithIcon} from '../../components'
import { ModalAddPost } from '../../components';
import { PostList } from '../../components';
import { homeScreenReducer, homeScreenInitialState, HomeScreenActionsEnum, HomeScreenActions } from '../../reducers';

import { Container} from './styles';
import { usePost } from '../../hooks';

export function Home() {
  const {posts, getAllPosts, createPost, searchPost} = usePost()
  const [state, dispatch] = useReducer(homeScreenReducer, homeScreenInitialState);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

   const handleButton = useCallback(async () =>{
    await createPost({title: title, body: body})
    await getAllPosts()
  }, [createPost, title, body, getAllPosts])

  useEffect(() => {
    searchPost()
  }, [])
  
  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#00C100'}}>
      <Container >
        <InputWithIcon icon='search'/>
        
       <PostList items={posts}/>

        <ButtonAdd
        onPress={() => dispatch(HomeScreenActions.toggleModal({isModalVisible: true})) }
        />
        <ModalAddPost
          onChangeText={setTitle, setBody}
          onSubmit={handleButton}
          isVisible={state.isModalVisible}
          onClose={() => dispatch(HomeScreenActions.toggleModal({ isModalVisible: false}))}
        />
       
      </Container>
    </SafeAreaView>
  );
}