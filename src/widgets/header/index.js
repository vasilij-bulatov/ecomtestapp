import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@rneui/themed';

import {Header as RNEHeader, Badge} from '@rneui/themed';

import {useSearch, Search} from '../../features/search-products';

import {useCartState} from '../../entities/cart';

export function Header({title, arrowBackEnable}) {
  const navigation = useNavigation();
  const {theme} = useTheme();
  const {totalProducts} = useCartState();
  const {isModalVisible, toggleModal} = useSearch();
  return (
    <>
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
          <View
            style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="search1" size={25} color={theme.colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <AntDesign
                name="shoppingcart"
                size={25}
                color={theme.colors.white}
              />
              {!!totalProducts && (
                <Badge
                  value={totalProducts}
                  status="success"
                  containerStyle={{
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    height: 3,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        }
      />
      <View>
        <Search isVisible={isModalVisible} toggle={toggleModal} />
      </View>
    </>
  );
}
