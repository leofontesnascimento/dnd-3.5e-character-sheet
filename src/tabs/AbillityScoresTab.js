import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  AbillityScore,
  SavingThrow,
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
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Strength'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='STR'
                abillity='Strength'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Dexterity'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='DEX'
                abillity='Dexterity'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Constitution'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='CON'
                abillity='Constitution'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Intelligence'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='INT'
                abillity='Intelligence'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Wisdom'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='WIS'
                abillity='Wisdom'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'AbillityScoreModal',
                  {
                    abillityName: 'Charisma'
                  }
                );
              }}
            >
              <AbillityScore
                acronym='CHA'
                abillity='Charisma'
                score='10'
                modifier='0'
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.savingThrows}>
          <View style={styles.viewHeader}>
            <SectionHeader title='Saving Throws' />
          </View>
          <View style={styles.viewTitles}>
            <View style={styles.titleSaving}>
              <SmallLabel label='Saving' />
            </View>
            <View style={styles.titleBaseAbillity}>
              <SmallLabel label='Abillity' />
            </View>
            <View style={styles.titleScore}>
              <SmallLabel label='Score' />
            </View>
          </View>
          <View style={styles.viewSavings}>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'SavingThrowModal',
                  {
                    savingName: 'Fortitude'
                  }
                );
              }}
            >
              <SavingThrow
                saving='Fortitude'
                abillityAcronym='CON'
                score='3'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'SavingThrowModal',
                  {
                    savingName: 'Reflex'
                  }
                );
              }}
            >
              <SavingThrow
                saving='Reflex'
                abillityAcronym='DEX'
                score='3'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate(
                  'SavingThrowModal',
                  {
                    savingName: 'Will'
                  }
                );
              }}
            >
              <SavingThrow
                saving='Will'
                abillityAcronym='WIS'
                score='3'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 5
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
  },
  titleSaving: {
    flex: 3,
    alignItems: 'flex-start'
  },
  viewSavings: {
    flex: 5,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  titleBaseAbillity: {
    flex: 1
  }
});

export { AbillityScoresTab };
