import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import { InventoryTab } from './tabs';

import { TabBarIcon } from './components';

const inventoryImg = require('./imgs/inventory.png');
const inventoryFocusedImg = require('./imgs/inventory-focused.png');

const InventoryStack = createStackNavigator({
  InventoryTab: { screen: InventoryTab }
});

export default createBottomTabNavigator(
  {
    Inventory: InventoryStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Inventory':
            iconSource = focused ? inventoryFocusedImg : inventoryImg;
            break;
          default:
            iconSource = inventoryImg;
        }

        return <TabBarIcon source={iconSource} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: '#FA6900',
        padding: 5,
        height: 60
      }
    }
  }
);
