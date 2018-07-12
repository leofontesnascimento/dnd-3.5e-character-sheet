import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  AbillityScore,
  SectionHeader,
  SmallLabel
} from '../components';

class AbillityScoresTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.abillityScores}>
          <View style={styles.viewHeader}>
            <SectionHeader title='Abillity Scores' />
          </View>
          <View style={styles.viewTitles}>
            <View style={styles.titleAbility}>
              <SmallLabel label='Abillity' />
            </View>
            <View style={styles.titleScore}>
              <SmallLabel label='Score' />
            </View>
            <View style={styles.titleModifier}>
              <SmallLabel label='Modifier' />
            </View>
          </View>
          <View style={styles.viewScores}>
            <AbillityScore
              acronym='STR'
              abillity='Strength'
              score='10'
              modifier='0'
            />
            <AbillityScore
              acronym='DEX'
              abillity='Dexterity'
              score='10'
              modifier='0'
            />
            <AbillityScore
              acronym='CON'
              abillity='Constitution'
              score='10'
              modifier='0'
            />
            <AbillityScore
              acronym='INT'
              abillity='Intelligence'
              score='10'
              modifier='0'
            />
            <AbillityScore
              acronym='WIS'
              abillity='Wisdom'
              score='10'
              modifier='0'
            />
            <AbillityScore
              acronym='CHA'
              abillity='Charisma'
              score='10'
              modifier='0'
            />
          </View>
        </View>
        <View style={styles.savingThrows}>
          <View style={styles.viewHeader}>
            <SectionHeader title='Saving Throws' />
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
  abillityScores: {
    flex: 2
  },
  savingThrows: {
    flex: 1
  },
  viewHeader: {
    flex: 1,
    padding: 15
  },
  viewTitles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  titleAbility: {
    flex: 3,
    alignItems: 'flex-start'
  },
  titleScore: {
    flex: 1
  },
  titleModifier: {
    flex: 1
  },
  viewScores: {
    flex: 14,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15
  }
});

export { AbillityScoresTab };
