import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Label,
  Status
} from './';

const Attack = props => (
  <View style={styles.container}>
    <View style={styles.viewName}>
      <Label
        light
        label={props.name}
      />
    </View>
    <View style={styles.viewLine}>
      <View style={styles.viewWeapon}>
        <Status
          label={'Weapon'}
          value={props.weapon}
        />
      </View>
      <View style={styles.viewDamage}>
        <Status
          label={'Damage'}
          value={props.damage}
        />
      </View>
      <View style={styles.viewAttackBonus}>
        <Status
          label={'Attack Bonus'}
          value={props.attackBonus}
        />
      </View>
      <View style={styles.viewCritical}>
        <Status
          label={'Critical'}
          value={props.critical}
        />
      </View>
    </View>
    <View style={styles.viewLine}>
      <View style={styles.viewRangeIncrement}>
        <Status
          label={'Range Increment'}
          value={props.rangeIncrement}
        />
      </View>
      <View style={styles.viewNotes}>
        <Status
          label={'Notes'}
          value={props.notes}
        />
      </View>
      <View style={styles.viewType}>
        <Status
          label={'Type'}
          value={props.type}
        />
      </View>
      <View style={styles.viewAmmunition}>
        <Status
          label={'Ammun'}
          value={props.ammunition}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#999',
    padding: 5
  },
  viewName: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FA6900',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
  },
  viewLine: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  viewWeapon: {
    flex: 2
  },
  viewAttackBonus: {
    flex: 1,
    marginLeft: 4
  },
  viewDamage: {
    flex: 2,
    marginLeft: 4
  },
  viewCritical: {
    flex: 1,
    marginLeft: 4

  },
  viewRangeIncrement: {
    flex: 2,
    minHeight: 30
  },
  viewType: {
    flex: 1,
    marginLeft: 4
  },
  viewNotes: {
    flex: 2,
    marginLeft: 4
  },
  viewAmmunition: {
    flex: 1,
    marginLeft: 4
  }
});

export { Attack };
