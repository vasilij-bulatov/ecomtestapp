import React, {useState} from 'react';
import {FilterModalScreen} from './ui/filter-modal-screen';
import {Button} from '@rneui/themed';

export function FilterProducts() {
  const STRINGS = {
    title: 'Фильтры',
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button
        title={STRINGS.title}
        containerStyle={{width: '70%', alignSelf: 'center'}}
        onPress={toggleModal}
      />
      <FilterModalScreen isVisible={isModalVisible} toggle={toggleModal} />
    </>
  );
}

export {filterReducer} from './model/store';
export {useFilterCategories} from './model/hooks';
