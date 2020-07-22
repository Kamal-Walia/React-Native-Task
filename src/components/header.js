import React from 'react';
import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './header-styles';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image
            source={require('../assets/images/menu.png')}
            style={styles.menu}
          />
        </TouchableOpacity>
        <View style={styles.search}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.menu}
          />
          <TextInput
            onChangeText={props.handleSearch}
            value={props.search}
            placeholder={'Search by location, placeName'}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={props.handlePress}>
          <Image
            source={require('../assets/images/filter.png')}
            style={styles.filter}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.handleAlertNavigation}>
          <Image
            source={require('../assets/images/alert.png')}
            style={styles.filter}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
