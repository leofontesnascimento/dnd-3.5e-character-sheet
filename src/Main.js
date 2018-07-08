import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default props => (
  <View style={styles.container}>
    <Text style={styles.txtScreen}>Character Screen</Text>
    <Text style={styles.txtScreen}>Inventory Screen</Text>
  </View>
);

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
