import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const HomeNavigator = createStackNavigator({
  Home,
});

const AppNavigator = createStackNavigator(
  {
    Main,
    Profile,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1DA1F2',
      },
      headerTintColor: '#ffffff',
    },
  },
);

const Routes = createSwitchNavigator({
  HomeNavigator,
  AppNavigator,
});

export default createAppContainer(Routes);
