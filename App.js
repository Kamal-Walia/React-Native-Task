import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppContainer from './src/navigation/RootNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default App;
