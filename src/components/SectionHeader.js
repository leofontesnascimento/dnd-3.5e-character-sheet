import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Label } from './';

const SectionHeader = props => (
  <View style={styles.container}>
    <View style={styles.txtHeader}>
      <Label label={props.title} />
    </View>
    <View style={styles.divisor} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  },
  txtHeader: {
    alignItems: 'flex-start'
  },
  divisor: {
    height: 1,
    backgroundColor: '#999',
    marginTop: 5
  }
});

export { SectionHeader };
