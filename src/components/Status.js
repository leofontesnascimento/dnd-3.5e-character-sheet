import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Label,
  SmallLabel
} from './';

const Status = props => (
  <View style={styles.justifyContent}>
    <View style={styles.viewLabel}>
      <SmallLabel label={props.label} />
    </View>
    <View style={styles.viewValue}>
      <Label label={props.value} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  viewValue: {
    backgroundColor: '#FFF',
    marginTop: 5
  }
});

export { Status };
