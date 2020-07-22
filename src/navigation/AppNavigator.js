import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import Alerts from '../Alerts';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{title: 'Alerts'}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
