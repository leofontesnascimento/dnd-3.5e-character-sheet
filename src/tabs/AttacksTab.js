import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Attack,
  SectionHeader
} from '../components';

class AttacksTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.attacks}>
          <View style={styles.viewHeader}>
            <SectionHeader title='Attacks' />
          </View>
          <View style={styles.viewAttacks}>
            <ScrollView>
              <View style={styles.viewScrollView}>
                <TouchableOpacity
                  style={{
                    flex: 1
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(
                      'AttackModal',
                      {
                        attackName: 'Orcrist',
                        weapon: 'Great Axe',
                        attackBonus: '7',
                        damage: '1d12+8',
                        critical: 'x3',
                        rangeIncrement: ' ',
                        type: ' ',
                        notes: ' ',
                        ammunition: ' '
                      }
                    );
                  }}
                >
                  <Attack
                    name='Orcrist'
                    weapon='Great Axe'
                    attackBonus='7'
                    damage='1d12+8'
                    critical='x3'
                    rangeIncrement=' '
                    type=' '
                    notes=' '
                    ammunition=' '
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(
                      'AttackModal',
                      {
                        attackName: ' ',
                        weapon: ' ',
                        attackBonus: ' ',
                        damage: ' ',
                        critical: ' ',
                        rangeIncrement: ' ',
                        type: ' ',
                        notes: ' ',
                        ammunition: ' '
                      }
                    );
                  }}
                >
                  <Attack
                    name=' '
                    weapon=' '
                    attackBonus=' '
                    damage=' '
                    critical=' '
                    rangeIncrement=' '
                    type=' '
                    notes=' '
                    ammunition=' '
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(
                      'AttackModal',
                      {
                        attackName: ' ',
                        weapon: ' ',
                        attackBonus: ' ',
                        damage: ' ',
                        critical: ' ',
                        rangeIncrement: ' ',
                        type: ' ',
                        notes: ' ',
                        ammunition: ' '
                      }
                    );
                  }}
                >
                  <Attack
                    name=' '
                    weapon=' '
                    attackBonus=' '
                    damage=' '
                    critical=' '
                    rangeIncrement=' '
                    type=' '
                    notes=' '
                    ammunition=' '
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(
                      'AttackModal',
                      {
                        attackName: ' ',
                        weapon: ' ',
                        attackBonus: ' ',
                        damage: ' ',
                        critical: ' ',
                        rangeIncrement: ' ',
                        type: ' ',
                        notes: ' ',
                        ammunition: ' '
                      }
                    );
                  }}
                >
                  <Attack
                    name=' '
                    weapon=' '
                    attackBonus=' '
                    damage=' '
                    critical=' '
                    rangeIncrement=' '
                    type=' '
                    notes=' '
                    ammunition=' '
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(
                      'AttackModal',
                      {
                        attackName: ' ',
                        weapon: ' ',
                        attackBonus: ' ',
                        damage: ' ',
                        critical: ' ',
                        rangeIncrement: ' ',
                        type: ' ',
                        notes: ' ',
                        ammunition: ' '
                      }
                    );
                  }}
                >
                  <Attack
                    name=' '
                    weapon=' '
                    attackBonus=' '
                    damage=' '
                    critical=' '
                    rangeIncrement=' '
                    type=' '
                    notes=' '
                    ammunition=' '
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  attacks: {
    flex: 1
  },
  viewHeader: {
    flex: 1,
    padding: 15
  },
  viewAttacks: {
    flex: 18
  },
  viewScrollView: {
    paddingLeft: 15,
    paddingRight: 15
  },
});

export { AttacksTab };
