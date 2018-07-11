import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';

const TextIn = props => (
  <TextInput
    style={styles.inpText}
    value={props.value}
  />
);

const styles = StyleSheet.create({
  inpText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export { TextIn };
