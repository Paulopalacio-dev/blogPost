import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import { Button } from './styles';

type Props = {
  onPress: VoidFunction;
}

export function ButtonAdd({onPress}: Props) {
   return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Button >
        <Icon name="add" size={25} color={'#AFB3B0'}/>
        </Button>
    </TouchableOpacity>
   
  );
}