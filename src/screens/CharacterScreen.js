import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CharacterScreen extends Component {
  static navigationOptions = {
    title: 'Character',
    headerStyle: {
      backgroundColor: '#F96A26',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtScreen}>Character Screen</Text>
        <Button
          title='Go to Inventory'
          onPress={() => {
            this.props.navigation.navigate('Inventory');
          }}
          color='#F96A26'
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
    backgroundColor: '#F5FCFF',
  },
  txtScreen: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
