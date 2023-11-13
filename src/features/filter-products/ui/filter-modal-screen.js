import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import Modal from 'react-native-modal';
import {Text, Button, Input, useTheme, ButtonGroup} from '@rneui/themed';
import {useFilterCategories, useGetProductsEffect} from '../model/hooks';
import {ActivityIndicator} from 'react-native';

export function FilterModalScreen({isVisible, toggle}) {
  const STRINGS = {
    title: 'Фильтры',
    minPrice: 'Минимальная цена',
    maxPrice: 'Максимальная цена',
    category: 'Категории',
    apply: 'Применить',
    reset: 'Сбросить',
    close: 'Закрыть',
  };
  const {theme} = useTheme();

  const {
    categories,
    isLoad,
    setSelectedIndex,
    selectedIndex,
    applyFilter,
    resetFilter,
  } = useFilterCategories();

  useGetProductsEffect(isLoad);

  const formik = useFormik({
    initialValues: {
      minPrice: '',
      maxPrice: '',
    },
    onSubmit: values => {
      applyFilter({
        minPrice: values.minPrice,
        maxPrice: values.maxPrice,
        applyFilter: true,
      });
      toggle();
    },
  });

  const reset = () => {
    formik.values.minPrice = '';
    formik.values.maxPrice = '';
    resetFilter();
    toggle();
  };

  return (
    <View flex={1}>
      <Modal
        propagateSwipe
        isVisible={isVisible}
        onSwipeComplete={toggle}
        swipeDirection={'left'}
        onBackButtonPress={toggle}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
            borderRadius: theme.spacing.sm,
          }}>
          <Text
            h4
            style={{
              textAlign: 'center',
              marginBottom: 8,
              padding: theme.spacing.md,
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
            }}>
            {STRINGS.title}
          </Text>
          <ScrollView>
            <Input
              label={STRINGS.minPrice}
              keyboardType="decimal-pad"
              onChangeText={formik.handleChange('minPrice')}
              value={formik.values.minPrice}
            />
            <Input
              label={STRINGS.maxPrice}
              keyboardType="decimal-pad"
              onChangeText={formik.handleChange('maxPrice')}
              value={formik.values.maxPrice}
            />
            <Text
              h5
              style={{
                paddingHorizontal: 10,
                paddingBottom: 16,
                fontSize: 16,
                fontWeight: 'bold',
                color: theme.colors.grey3,
              }}>
              {STRINGS.category}
            </Text>

            {isLoad ? (
              <ButtonGroup
                buttons={categories}
                selectMultiple
                vertical
                selectedIndexes={selectedIndex}
                onPress={value => setSelectedIndex(value)}
              />
            ) : (
              <ActivityIndicator size={40} />
            )}
          </ScrollView>

          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              width: '90%',
              flexDirection: 'row',
              paddingTop: 8,
            }}>
            <Button title={STRINGS.reset} type="outline" onPress={reset} />
            <Button title={STRINGS.apply} onPress={formik.handleSubmit} />
          </View>
          <Button title={STRINGS.close} type="clear" onPress={toggle} />
        </View>
      </Modal>
    </View>
  );
}
