import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

const LargeLabel = props => (
  <Text style={styles.txtLargeLabel}>{props.label}</Text>
);

const styles = StyleSheet.create({
  txtLargeLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export { LargeLabel };
