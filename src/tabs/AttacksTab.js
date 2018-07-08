import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class AttacksTab extends Component {
  static navigationOptions = {
    title: 'Attacks',
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
        <Text style={styles.txtTab}>Attacks Tab</Text>
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

export { AttacksTab };
