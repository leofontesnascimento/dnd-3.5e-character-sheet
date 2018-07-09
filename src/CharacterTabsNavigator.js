import React from 'react';

import {
  createBottomTabNavigator,
  StackNavigator
} from 'react-navigation';

import {
  AbillityScoresTab,
  AttacksTab,
  SkillsTab,
  StatusTab
} from './tabs';

import { TabBarIcon } from './components';

const statusImg = require('./imgs/status.png');
const statusFocusedImg = require('./imgs/status-focused.png');
const abillityImg = require('./imgs/abillity.png');
const abillityFocusedImg = require('./imgs/abillity-focused.png');
const skillsImg = require('./imgs/skills.png');
const skillsFocusedImg = require('./imgs/skills-focused.png');
const attacksImg = require('./imgs/attacks.png');
const attacksFocusedImg = require('./imgs/attacks-focused.png');

const StatusStack = StackNavigator({
  StatusTab: { screen: StatusTab }
});

const AbillityStack = StackNavigator({
  AbillityTab: { screen: AbillityScoresTab }
});

const SkillsStack = StackNavigator({
  SkillsTab: { screen: SkillsTab }
});

const AttacksStack = StackNavigator({
  Attacks: { screen: AttacksTab }
});

export default createBottomTabNavigator(
  {
    Status: StatusStack,
    Abillity: AbillityStack,
    Skills: SkillsStack,
    Attacks: AttacksStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Status':
            iconSource = focused ? statusFocusedImg : statusImg;
            break;
          case 'Abillity':
            iconSource = focused ? abillityFocusedImg : abillityImg;
            break;
          case 'Skills':
            iconSource = focused ? skillsFocusedImg : skillsImg;
            break;
          case 'Attacks':
            iconSource = focused ? attacksFocusedImg : attacksImg;
            break;
          default:
            iconSource = statusImg;
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
