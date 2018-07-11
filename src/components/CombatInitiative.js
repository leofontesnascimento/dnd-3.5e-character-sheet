import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Status } from '../components';

const CombatInitiative = props => (
  <View style={styles.container}>
    <View style={styles.viewStatus}>
      <Status
        label='Initiative'
        value={props.initiative}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Armor Class'
        value={props.armorClass}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Speed'
        value={props.speed}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Grapple'
        value={props.grappleModifier}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  viewStatus: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});

export { CombatInitiative };
