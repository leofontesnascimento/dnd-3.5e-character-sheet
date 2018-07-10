import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import { InventoryTab } from './tabs';

import { FooScreen } from './screens';

import {
  MenuIcon,
  TabBarIcon
} from './components';

const inventoryImg = require('./imgs/inventory.png');
const inventoryFocusedImg = require('./imgs/inventory-focused.png');

const tabsNavigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#FA6900',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: <MenuIcon navigation={navigation} />,
});

const InventoryStack = createStackNavigator(
  {
    InventoryTab: {
      screen: InventoryTab,
      navigationOptions: tabsNavigationOptions
    },
    FooScreen: { screen: FooScreen }
  }
);

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
