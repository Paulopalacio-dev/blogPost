import React from 'react';
import { FlatList, View } from 'react-native';
import { PostItem, Props as PostItemProps } from '../PostItem';

type Props = {
  items: PostItemProps[]
}

export function PostList({items}: Props) {

  
  return (
    <View>
     {items.map(
      (items, index) => <PostItem key={index} {...items}/>
    )}
    </View>
    
  );
}
