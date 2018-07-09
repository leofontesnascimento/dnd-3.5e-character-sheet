import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StatusTab extends Component {
  static navigationOptions = {
    title: 'Character',
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

export { StatusTab };
