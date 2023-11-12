import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@rneui/themed';

import {Header as RNEHeader} from '@rneui/themed';

export function Header({title, arrowBackEnable}) {
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <RNEHeader
      leftComponent={
        arrowBackEnable && {
          icon: 'arrow-back',
          color: theme.colors.white,
          onPress: () => navigation.goBack(),
        }
      }
      centerComponent={{
        text: title,
        style: {fontSize: 18, fontWeight: '600', color: theme.colors.white},
      }}
      rightComponent={
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <AntDesign
              name="shoppingcart"
              size={25}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
