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

const AbillityScoreModal = props => (
  <ScrollView>
    <View style={styles.container}>
      <LargeLabel
        label={
          `Set your ${props.navigation.getParam(
            'abillityName',
            'no-abillity')}`
        }
      />
      <StatusInput
        number
        label={
          `${props.navigation.getParam(
            'abillityName',
            'no-abillity'
          )} Modifier`
        }
        value='0'
      />
      <StatusInput
        number
        label='Base Score'
        value='10'
      />
      <StatusInput
        number
        label='Racial Modifier'
        value='0'
      />
      <StatusInput
        number
        label='Enhancement Bonuses'
        value='0'
      />
      <StatusInput
        number
        label='Misc Bonuses'
        value='0'
      />
      <StatusInput
        number
        label='Misc Penalties'
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

export { AbillityScoreModal };
