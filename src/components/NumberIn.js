import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';

const NumberIn = props => (
  <TextInput
    style={styles.inpNumber}
    value={props.value.toString()}
    keyboardType='numeric'
    onChangeText={text => {
      switch (props.context) {
        case 'currentHitPoints':
          props.modifyCurrent(text);
          break;
        case 'totalHitPoints':
          props.modifyTotal(text);
          break;
        case 'classLevel':
          props.modifyClassLevel(text);
          break;
        case 'currentExperience':
          props.modifyCurrentExperience(text);
          break;
        case 'totalExperience':
          props.modifyTotalExperience(text);
          break;
        default:
          break;
      }
    }}
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
