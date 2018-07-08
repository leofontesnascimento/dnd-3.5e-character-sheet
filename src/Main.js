import React from 'react';

import { createStackNavigator } from 'react-navigation';

import CharacterScreen from './screens/CharacterScreen';
import InventoryScreen from './screens/InventoryScreen';

const RootStack = createStackNavigator(
  {
    Character: CharacterScreen,
    Inventory: InventoryScreen
  },
  {
    initialRouteName: 'Character',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FA6900',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

export default props => (
  <RootStack />
);
