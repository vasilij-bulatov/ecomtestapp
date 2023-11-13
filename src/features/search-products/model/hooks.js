import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { searchActions, searchProducts } from './store';

export function useSearch() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const searchState = useSelector(state => state.search);

  const dispatch = useDispatch();

  const onChangeSearch = (text) => {
    dispatch(searchActions.setQuery(text));
    if (text !== searchState.searchQuery) {
      dispatch(searchProducts(text));
    }
  };

  return {isModalVisible, toggleModal, ...searchState, onChangeSearch};
}