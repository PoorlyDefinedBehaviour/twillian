import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main, { navigationOptions } from '~/pages/Main';
import Home from '~/pages/Home';

const HomeNavigator = createSwitchNavigator({
  Home,
});

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions,
  },
});

const Routes = createSwitchNavigator({
  HomeNavigator,
  AppNavigator,
});

export default createAppContainer(Routes);
