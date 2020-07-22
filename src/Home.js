import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import CircleImageCarousel from './components/CircleImageCarousel';
import FeedCard from './components/FeedCard';
import styles from './app-styles.js';
import {data} from './data/data';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  handlePress = () => {
    alert('Coming Soon');
  };

  handleAlertNavigation = () => {
    this.props.navigation.navigate('Alerts');
  };

  handleSearch = (search) => {
    this.setState({search});
  };

  getFeedData = () => {
    if (!this.state.search || this.state.search === 'All') {
      return data;
    } else {
      return data.filter(
        (item) =>
          item.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
          item.subTitle.toLowerCase().includes(this.state.search.toLowerCase()),
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <View>
            <Header
              handleAlertNavigation={this.handleAlertNavigation}
              navigation={this.props.navigation}
              search={this.state.search}
              handleSearch={this.handleSearch}
              handlePress={this.handlePress}
            />
            <CircleImageCarousel handleSearch={this.handleSearch} />
            <View style={styles.imageCarousel}>
              <ImageCarousel />
            </View>
          </View>
          <FlatList
            data={this.getFeedData()}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            keyExtractor={(item, index) => `${index}`}
            numColumns={2}
            style={styles.listStyle}
            columnWrapperStyle={styles.listColumnStyle}
            renderItem={({item, index}) => {
              return <FeedCard item={item} index={index} />;
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
