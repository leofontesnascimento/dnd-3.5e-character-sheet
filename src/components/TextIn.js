import React from 'react';

import {
  StyleSheet,
  TextInput
} from 'react-native';

const TextIn = props => (
  <TextInput
    style={styles.inpText}
    value={props.value}
    onChangeText={text => {
      switch (props.context) {
        case 'className':
          props.modifyClassName(text);
          break;
        case 'raceName':
          props.modifyRaceName(text);
          break;
        case 'hitDice':
          props.modifyHitDice(text);
          break;
        default:
          break;
      }
    }}
  />
);

const styles = StyleSheet.create({
  inpText: {
    height: 38,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export { TextIn };
