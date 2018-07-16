import React from 'react';

import { connect } from 'react-redux';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  StatusInput,
  LargeLabel
} from '../components';

import {
  modifyRaceName,
  modifyHitDice
} from '../actions/RaceActions';

const RaceModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your race and hit dice' />
    <StatusInput
      label='Race'
      value={props.raceName}
      context='raceName'
      modifyRaceName={props.modifyRaceName}
    />
    <StatusInput
      label='Hit Dice'
      value={props.hitDice}
      context='hitDice'
      modifyHitDice={props.modifyHitDice}
    />
    <View style={styles.viewFooter}>
      <View style={styles.viewButton}>
        <Button
          title='Cancel'
          color='#FA6900'
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          title='Confirm'
          color='#FA6900'
          onPress={() => {
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
  }
});

const mapStateToProps = state => (
  {
    raceName: state.RaceReducer.raceName,
    hitDice: state.RaceReducer.hitDice
  }
);

const actionCreators = {
  modifyRaceName,
  modifyHitDice
};

export default connect(mapStateToProps, actionCreators)(RaceModal);
