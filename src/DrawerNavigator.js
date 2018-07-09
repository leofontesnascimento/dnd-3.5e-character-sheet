import React from 'react';

import {
  createDrawerNavigator,
  StackNavigator
} from 'react-navigation';

import CharacterTabsNavigator from './CharacterTabsNavigator';

import {
  InventoryScreen
} from './screens';

const InventoryStack = StackNavigator({
  Inventory: { screen: InventoryScreen }
});

export default createDrawerNavigator({
  Character: { screen: CharacterTabsNavigator },
  Inventory: { screen: InventoryStack }
});
