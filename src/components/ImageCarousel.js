import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import styles from './imageCarousel-styles';
import {carouselData} from '../data/data';

const ImageCarousel = (props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {carouselData.map((item, index) => {
        return (
          <View key={index} style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={item.img}
              resizeMode={'contain'}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ImageCarousel;
