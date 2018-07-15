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
  increaseCurrent,
  decreaseCurrent,
  modifyCurrent,
  increaseTotal,
  decreaseTotal,
  modifyTotal
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
      value={props.current}
      context='currentHitPoints'
      modifyCurrent={props.modifyCurrent}
      increaseCurrent={props.increaseCurrent}
      decreaseCurrent={props.decreaseCurrent}
    />
    <StatusInput
      number
      label='Total'
      value={props.total}
      context='totalHitPoints'
      modifyTotal={props.modifyTotal}
      increaseTotal={props.increaseTotal}
      decreaseTotal={props.decreaseTotal}
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
              value: props.current
            });
            storeData({
              key: '@DnDSuperStore:totalHitPoints',
              value: props.total
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
    current: state.HitPointsReducer.current,
    total: state.HitPointsReducer.total
  }
);

const actionCreators = {
  increaseCurrent,
  decreaseCurrent,
  modifyCurrent,
  increaseTotal,
  decreaseTotal,
  modifyTotal
};

export default connect(mapStateToProps, actionCreators)(HitPointsModal);
