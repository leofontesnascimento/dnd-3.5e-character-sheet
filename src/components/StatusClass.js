import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Status } from '../components';

const StatusClass = props => (
  <View style={styles.container}>
    <View
      style={{
        flex: 2
      }}
    >
      <Status
        label='Class'
        value={props.charClass}
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
        value={props.lvl}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  }
});

export { StatusClass };
