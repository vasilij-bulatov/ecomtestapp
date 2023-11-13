import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {Button, useTheme, SearchBar} from '@rneui/themed';

import {SearchResultList} from './ui/search-result-list';
import {useSearch} from './model/hooks';

export function Search({isVisible, toggle}) {
  const {theme} = useTheme();
  const {searchQuery, onChangeSearch, isPending, data, isLoad} = useSearch();
  return (
    <View flex={1}>
      <Modal
        isVisible={isVisible}
        onSwipeComplete={toggle}
        swipeDirection={'left'}
        onBackButtonPress={toggle}
        propagateSwipe>
        <View style={{flex: 1, backgroundColor: theme.colors.background}}>
          <SearchBar
            value={searchQuery}
            onChangeText={onChangeSearch}
            lightTheme
            showLoading={isPending}
          />
          {isPending ? (
            <View flex={1}>
              <ActivityIndicator />
            </View>
          ) : isLoad ? (
            searchQuery ? (
              <SearchResultList products={data} toggle={toggle} />
            ) : (
              <View flex={1} />
            )
          ) : (
            <View flex={1} />
          )}
          <Button
            title={'Закрыть'}
            containerStyle={{marginTop: 5}}
            onPress={toggle}
            type="clear"
          />
        </View>
      </Modal>
    </View>
  );
}

export {useSearch} from './model/hooks';
export {searchReducer} from './model/store';
