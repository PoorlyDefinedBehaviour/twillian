import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main, { navigationOptions } from '~/pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#1DA1F2',
        },
        headerTintColor: '#ffffff',
      },
    },
  ),
);

export default Routes;
