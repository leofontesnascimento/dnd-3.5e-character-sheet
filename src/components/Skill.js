import React from 'react';
import {
  CheckBox,
  StyleSheet,
  View
} from 'react-native';

import {
  Label
} from './Label';

const Skill = props => (
  <View style={styles.container}>
    <View style={styles.viewClassSkill}>
      <CheckBox />
    </View>
    <View style={styles.viewUntrained}>
      <CheckBox
        disabled
        value={props.untrained}
      />
    </View>
    <View style={styles.viewArmorPenalty}>
      <CheckBox
        disabled
        value={props.armorPenalty}
      />
    </View>
    <View style={styles.viewSkillName}>
      <Label label={props.skillName} />
    </View>
    <View style={styles.viewAbillityAcronym}>
      <Label
        light
        label={props.abillityAcronym}
      />
    </View>
    <View style={styles.viewSkillModifier}>
      <Label label={props.skillModifier} />
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
  viewClassSkill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSkillName: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    marginLeft: 4,
    paddingLeft: 5
  },
  viewUntrained: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  viewArmorPenalty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAbillityAcronym: {
    flex: 2,
    backgroundColor: '#FA6900',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    marginLeft: 4
  },
  viewSkillModifier: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginLeft: 4
  }
});

export { Skill };
