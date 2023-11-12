import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Image} from '@rneui/themed';

export function ImagesCarousel({images}) {
  const SLIDER_WIDTH = useWindowDimensions().width ;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
  const styles = getStyles(ITEM_WIDTH);

  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  const pagination  = (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{width: '100%'}}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'black'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );

  return (
    <View>
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      inactiveSlideShift={0}
      useScrollView={true}
      onSnapToItem={(index) => setActiveSlide(index) }
      loop={true}
    />
    {pagination}
    </View>
  );
}

const getStyles = width =>
  StyleSheet.create({
    container: {
      width: width,
      padding: 20,
      //backgroundColor: 'red',
      //justifyContent: 'center',
      alignItems: 'center',
    },
    viewContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    image: {
      width: width,
      height: 200,
    },
    textPrice: {
      color: '#317873',
    },
    textTitle: {
      width: '60%',
    },
  });
