import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main, { navigationOptions } from '~/pages/Main';
import Home from '~/pages/Home';

const Routes = createSwitchNavigator({
  Home,
  Main: {
    screen: Main,
    navigationOptions,
  },
});

export default createAppContainer(Routes);
