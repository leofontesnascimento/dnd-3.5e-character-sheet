import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

const Label = props => {
  if (props.light) {
    return (
      <Text style={styles.txtLightLabel}>{props.label}</Text>
    );
  }

  return (
    <Text style={styles.txtLabel}>{props.label}</Text>
  );
};

const styles = StyleSheet.create({
  txtLabel: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txtLightLabel: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export { Label };
