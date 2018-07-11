import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  CombatBaseAttack,
  CombatInitiative,
  SectionHeader,
  StatusClass,
  StatusExperience,
  StatusHitPoints,
  StatusRace
} from '../components';

class StatusTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <View style={styles.header}>
            <SectionHeader title='Status' />
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={{
                flex: 3
              }}
              onLongPress={() => {
                this.props.navigation.navigate('HitPointsModal');
              }}
            >
              <StatusHitPoints
                current='17'
                total='17'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 3
              }}
              onLongPress={() => {
                this.props.navigation.navigate('ClassModal');
              }}
            >
              <StatusClass
              charClass='Cleric'
              lvl='1'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 3
              }}
              onLongPress={() => {
                this.props.navigation.navigate('RaceModal');
              }}
            >
              <StatusRace
                race='Dwarf'
                hitDice='1d8'
              />
            </TouchableOpacity>
            <StatusExperience
              current='150'
              total='300'
            />
          </View>
        </View>
        <View style={styles.combat}>
          <View style={styles.header}>
            <SectionHeader title='Combat' />
          </View>
          <View style={styles.content}>
            <CombatInitiative
              initiative='2'
              armorClass='12'
              speed='30'
              grappleModifier='5'
            />
            <CombatBaseAttack
              baseAttackBonus='5'
              touchArmorClass='10'
              flatFootedArmorClass='8'
              spellResistence='9'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  status: {
    flex: 1.3
  },
  combat: {
    flex: 1
  },
  header: {
    flex: 1,
    padding: 15
  },
  content: {
    flex: 12
  }
});

export { StatusTab };
