import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class InventoryTab extends Component {
  static navigationOptions = {
    title: 'Inventory',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTab}>Inventory Tab</Text>
        <Button
          title='Go to Foo Screen'
          color='#FA6900'
          onPress={() => {
            this.props.navigation.navigate('FooScreen');
          }}
        />
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
