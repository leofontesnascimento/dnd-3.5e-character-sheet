import React from 'react';

import { createStackNavigator } from 'react-navigation';

import CharacterScreen from './screens/CharacterScreen';

const RootStack = createStackNavigator(
  {
    Character: CharacterScreen
  },
  {
    initialRouteName: 'Character'
  }
);

export default props => (
  <RootStack />
);
