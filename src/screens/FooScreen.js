import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class FooScreen extends Component {
  static navigationOptions = {
    title: 'Foo',
    headerStyle: {
      backgroundColor: '#FA6900',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtScreen}>Inventory Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  txtScreen: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export { FooScreen };
