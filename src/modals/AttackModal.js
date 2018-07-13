import React from 'react';

import {
  Button,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import {
  LargeLabel,
  StatusInput
} from '../components';

const AttackModal = props => (
  <ScrollView>
    <View style={styles.container}>
      <LargeLabel
        label='Set your attack'
      />
      <StatusInput
        label='Name'
        value={`${props.navigation.getParam(
          'attackName',
          'no-attack')}`}
      />
      <StatusInput
        label='Weapon'
        value={`${props.navigation.getParam(
          'weapon',
          'no-attack')}`}
      />
      <StatusInput
        label='Attack Bonus'
        value={`${props.navigation.getParam(
          'attackBonus',
          'no-attack')}`}
      />
      <StatusInput
        label='Damage'
        value={`${props.navigation.getParam(
          'damage',
          'no-attack')}`}
      />
      <StatusInput
        label='Critical'
        value={`${props.navigation.getParam(
          'critical',
          'no-attack')}`}
      />
      <StatusInput
        label='Range Increment'
        value={`${props.navigation.getParam(
          'rangeIncrement',
          'no-attack')}`}
      />
      <StatusInput
        label='Type'
        value={`${props.navigation.getParam(
          'type',
          'no-attack')}`}
      />
      <StatusInput
        label='Notes'
        value={`${props.navigation.getParam(
          'notes',
          'no-attack')}`}
      />
      <StatusInput
        number
        label='Ammunition'
        value={`${props.navigation.getParam(
          'ammunition',
          'no-attack')}`}
      />
      <View style={styles.viewFooter}>
        <View style={styles.viewButton}>
          <Button
            title='Cancel'
            color='#FA6900'
            onPress={() => {
              console.log('Canceled');
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.viewButton}>
          <Button
            title='Confirm'
            color='#FA6900'
            onPress={() => {
              console.log('Confirmed');
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  viewButton: {
    width: 100,
    margin: 20
  },
  viewHeader: {
    flex: 1,
    marginTop: 20
  },
});

export { AttackModal };
