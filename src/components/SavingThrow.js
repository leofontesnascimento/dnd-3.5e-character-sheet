import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Label
} from './Label';

const SavingThrow = props => (
  <View style={styles.container}>
    <View style={styles.viewSaving}>
      <View style={styles.viewTitleSaving}>
        <Label label={props.saving} />
      </View>
    </View>
    <View style={styles.viewAbillityAcronym}>
      <Label
        light
        label={props.abillityAcronym}
      />
    </View>
    <View style={styles.viewScore}>
      <Label label={props.score} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2
  },
  viewSaving: {
    flex: 3,
    backgroundColor: '#FFF'
  },
  viewTitleSaving: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  viewScore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginLeft: 4
  },
  viewAbillityAcronym: {
    flex: 1,
    backgroundColor: '#FA6900',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4
  }
});

export { SavingThrow };
