import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';

const NumberIn = props => (
  <TextInput
    style={styles.inpNumber}
    value={props.value}
    keyboardType='numeric'
  />
);

const styles = StyleSheet.create({
  inpNumber: {
    height: 38,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export { NumberIn };
