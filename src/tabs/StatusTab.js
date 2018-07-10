import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
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
            <StatusHitPoints
              current='17'
              total='17'
            />
            <StatusClass
              charClass='Cleric'
              lvl='1'
            />
            <StatusRace
              race='Dwarf'
              hitDice='1d8'
            />
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
            <Text
              style={{
                marginLeft: 15,
                marginRight: 15
              }}
            >Combat Content</Text>
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
    flex: 1
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
