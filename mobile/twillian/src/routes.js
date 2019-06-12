import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';

const HomeNavigator = createStackNavigator(
  { Home, Register },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1da1f2',
      },
      headerTintColor: '#ffffff',
    },
  },
);

const AppNavigator = createStackNavigator(
  { Main, Profile },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1da1f2',
      },
      headerTintColor: '#ffffff',
    },
  },
);

const Routes = createSwitchNavigator({
  HomeNavigator,
  App: AppNavigator,
});

export default createAppContainer(Routes);
