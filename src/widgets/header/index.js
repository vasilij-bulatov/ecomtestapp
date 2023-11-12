import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {Header as RNEHeader} from '@rneui/themed';

export function Header({title, arrowBackEnable}) {
  const navigation = useNavigation();
  return (
    <RNEHeader
      leftComponent={arrowBackEnable && {icon: 'arrow-back', onPress: () => navigation.goBack()}}
      centerComponent={{ text: title, style: {fontSize: 18} }}
    />
  );
}
