import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class InventoryTab extends Component {
  static navigationOptions = {
    title: 'Inventory',
    headerStyle: {
      backgroundColor: '#FA6900',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTab}>Inventory Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  txtTab: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export { InventoryTab };
