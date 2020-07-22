import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppDrawerNavigator from './app-drawer-navigator';

const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      appDrawer: {screen: AppDrawerNavigator},
    },
    {
      initialRouteName: 'appDrawer',
    },
  ),
);

export default RootNavigator;
