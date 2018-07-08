import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StatusTab extends Component {
  static navigationOptions = {
    title: 'Status',
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
        <Text style={styles.txtTab}>Status Tab</Text>
        <Button
          title='Go to Character'
          onPress={() => {
            this.props.navigation.navigate('Character');
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
    backgroundColor: '#F5FCFF'
  },
  txtTab: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export { StatusTab };
