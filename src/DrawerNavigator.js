import React, { Component } from 'react';

import {
  createDrawerNavigator,
  NavigationActions,
  SafeAreaView
} from 'react-navigation';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import CharacterTabsNavigator from './CharacterTabsNavigator';
import InventoryTabsNavigator from './InventoryTabsNavigator';

class CustomDrawerNavigation extends Component {
  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View style={styles.header}>
              <Text style={styles.txtHeader}>Header</Text>
            </View>
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => {
                  this.navigateToScreen('Character');
                }}
              >
                <Text style={styles.txtContent}>Character</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.navigateToScreen('Inventory');
                }}
              >
                <Text style={styles.txtContent}>Inventory</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    height: 200,
    backgroundColor: '#FA6900',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtHeader: {
    height: 30,
    fontSize: 20,
    color: '#FFF'
  },
  content: {
    justifyContent: 'center',
    padding: 20
  },
  txtContent: {
    height: 40,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default createDrawerNavigator(
  {
    Character: CharacterTabsNavigator,
    Inventory: InventoryTabsNavigator
  },
  {
    contentComponent: CustomDrawerNavigation
  }
);
