import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import {
  AbillityScoresTab,
  AttacksTab,
  SkillsTab
} from './tabs';

import StatusTab from './tabs/StatusTab';

import {
  AbillityScoreModal,
  ArmorClassModal,
  AttackModal,
  BaseAttackModal,
  FlatFootedACModal,
  GrappleModal,
  SavingThrowModal,
  SkillModal,
  SpeedModal,
  SpellResistenceModal,
  TouchACModal
} from './modals';

import ExperienceModal from './modals/ExperienceModal';
import ClassModal from './modals/ClassModal';
import HitPointsModal from './modals/HitPointsModal';
import InitiativeModal from './modals/InitiativeModal';
import RaceModal from './modals/RaceModal';

import {
  MenuIcon,
  TabBarIcon
} from './components';

const statusImg = require('./imgs/status.png');
const statusFocusedImg = require('./imgs/status-focused.png');
const abillityImg = require('./imgs/abillity.png');
const abillityFocusedImg = require('./imgs/abillity-focused.png');
const skillsImg = require('./imgs/skills.png');
const skillsFocusedImg = require('./imgs/skills-focused.png');
const attacksImg = require('./imgs/attacks.png');
const attacksFocusedImg = require('./imgs/attacks-focused.png');

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

const StatusStack = createStackNavigator(
  {
    StatusTab: {
      screen: StatusTab,
      navigationOptions: tabsNavigationOptions
    }
  }
);

const AbillityStack = createStackNavigator(
  {
    AbillityTab: {
      screen: AbillityScoresTab,
      navigationOptions: tabsNavigationOptions
    }
  }
);

const SkillsStack = createStackNavigator(
  {
    SkillsTab: {
      screen: SkillsTab,
      navigationOptions: tabsNavigationOptions
    }
  }
);

const AttacksStack = createStackNavigator(
  {
    AttacksTab: {
      screen: AttacksTab,
      navigationOptions: tabsNavigationOptions
    }
  }
);

const StatusModalStack = createStackNavigator(
  {
    StatusStack,
    HitPointsModal,
    ClassModal,
    RaceModal,
    ExperienceModal,
    InitiativeModal,
    ArmorClassModal,
    SpeedModal,
    GrappleModal,
    BaseAttackModal,
    TouchACModal,
    FlatFootedACModal,
    SpellResistenceModal,
    AbillityScoreModal,
    SavingThrowModal,
    SkillModal,
    AttackModal
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

StatusModalStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default createBottomTabNavigator(
  {
    Status: StatusModalStack,
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
