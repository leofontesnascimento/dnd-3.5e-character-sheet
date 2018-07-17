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
  increaseCurrentHitPoints,
  decreaseCurrentHitPoints,
  modifyCurrentHitPoints,
  increaseTotalHitPoints,
  decreaseTotalHitPoints,
  modifyTotalHitPoints
} from '../actions/HitPointsActions';

import {
  storeData
} from '../storage/Storage';

const HitPointsModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your hit points' />
    <StatusInput
      number
      label='Current'
      value={props.currentHitPoints}
      context='currentHitPoints'
      modifyCurrentHitPoints={props.modifyCurrentHitPoints}
      increaseCurrentHitPoints={props.increaseCurrentHitPoints}
      decreaseCurrentHitPoints={props.decreaseCurrentHitPoints}
    />
    <StatusInput
      number
      label='Total'
      value={props.totalHitPoints}
      context='totalHitPoints'
      modifyTotalHitPoints={props.modifyTotalHitPoints}
      increaseTotalHitPoints={props.increaseTotalHitPoints}
      decreaseTotalHitPoints={props.decreaseTotalHitPoints}
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
            storeData({
              key: '@DnDSuperStore:currentHitPoints',
              value: props.currentHitPoints
            });
            storeData({
              key: '@DnDSuperStore:totalHitPoints',
              value: props.totalHitPoints
            });
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
    currentHitPoints: state.HitPointsReducer.currentHitPoints,
    totalHitPoints: state.HitPointsReducer.totalHitPoints
  }
);

const actionCreators = {
  increaseCurrentHitPoints,
  decreaseCurrentHitPoints,
  modifyCurrentHitPoints,
  increaseTotalHitPoints,
  decreaseTotalHitPoints,
  modifyTotalHitPoints
};

export default connect(mapStateToProps, actionCreators)(HitPointsModal);
