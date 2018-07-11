import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

const SmallLabel = props => (
  <Text style={styles.txtLabel}>{props.label}</Text>
);

const styles = StyleSheet.create({
  txtLabel: {
    fontSize: 12,
    textAlign: 'center'
  }
});

export { SmallLabel };
