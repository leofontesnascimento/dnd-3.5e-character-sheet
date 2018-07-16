import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Status } from '../components';

const Class = props => (
  <View style={styles.container}>
    <View
      style={{
        flex: 2
      }}
    >
      <Status
        label='Class'
        value={props.name}
      />
    </View>
    <View
      style={{
        flex: 1,
        marginLeft: 10
      }}
    >
      <Status
        label='Level'
        value={props.level}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  }
});

export { Class };
