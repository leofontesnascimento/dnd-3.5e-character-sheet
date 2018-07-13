import React from 'react';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  LargeLabel,
  StatusInput
} from '../components';

const SkillModal = props => (
  <View style={styles.container}>
    <LargeLabel
      label={
        `Set your skill ${props.navigation.getParam(
          'skillName',
          'no-skill')}`
      }
    />
    <StatusInput
      number
      label='Ranks'
      value='0'
    />
    <StatusInput
      number
      label='Abillity Modifier'
      value='0'
    />
    <StatusInput
      number
      label='Misc Modifier'
      value='0'
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

export { SkillModal };
