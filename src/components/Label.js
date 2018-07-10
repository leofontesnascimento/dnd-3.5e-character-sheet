import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

const Label = props => (
  <Text style={styles.txtLabel}>{props.label}</Text>
);

const styles = StyleSheet.create({
  txtLabel: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export { Label };
