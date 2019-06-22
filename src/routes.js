import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Timeline from '~/pages/Timeline';
import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

import SearchField from '~/components/Search';

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
  { Timeline, Profile, Search },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1da1f2',
      },
      headerTintColor: '#ffffff',
      headerRight: <SearchField />,
    },
  },
);

const Routes = createSwitchNavigator({
  HomeNavigator,
  App: AppNavigator,
});

export default createAppContainer(Routes);
