import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Status } from '../components';

const Race = props => (
  <View style={styles.container}>
    <View
      style={{
        flex: 2
      }}
    >
      <Status
        label='Race'
        value={props.raceName}
      />
    </View>
    <View
      style={{
        flex: 1,
        marginLeft: 10
      }}
    >
      <Status
        label='Hit Dice'
        value={props.hitDice}
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

export { Race };
