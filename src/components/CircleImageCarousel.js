import React from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './circleImageCarousel-styles';
import {circleImageData} from '../data/data';

const CircleImageCarousel = (props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {circleImageData.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => props.handleSearch(item.title)}>
          <View key={index} style={styles.circleImageWithText}>
            <View style={styles.circleImage}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={styles.imgCircle}
              />
            </View>
            <Text>{item.title}</Text>
          </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CircleImageCarousel;
