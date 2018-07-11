import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Status } from '../components';

const CombatBaseAttack = props => (
  <View style={styles.container}>
    <View style={styles.viewStatus}>
      <Status
        label='Base Attack'
        value={props.baseAttackBonus}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Touch AC'
        value={props.touchArmorClass}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Flat-Footed AC'
        value={props.flatFootedArmorClass}
      />
    </View>
    <View style={styles.viewStatus}>
      <Status
        label='Spell Resistence'
        value={props.spellResistence}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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

export { CombatBaseAttack };
