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
  decreaseIniDexModifier,
  decreaseIniMiscModifier,
  increaseIniDexModifier,
  increaseIniMiscModifier,
  modifyIniDexModifier,
  modifyIniMiscModifier,
  modifyInitiative
} from '../actions/InitiativeActions';

const InitiativeModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your initiative' />
    <StatusInput
      number
      label='Dex Modifier'
      value={props.iniDexModifier}
      context='iniDexModifier'
      modifyIniDexModifier={props.modifyIniDexModifier}
      increaseIniDexModifier={props.increaseIniDexModifier}
      decreaseIniDexModifier={props.decreaseIniDexModifier}
    />
    <StatusInput
      number
      label='Misc Modifier'
      value={props.iniMiscModifier}
      context={'iniMiscModifier'}
      modifyIniMiscModifier={props.modifyIniMiscModifier}
      increaseIniMiscModifier={props.increaseIniMiscModifier}
      decreaseIniMiscModifier={props.decreaseIniMiscModifier}
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
            props.modifyInitiative();
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
    iniDexModifier: state.InitiativeReducer.iniDexModifier,
    iniMiscModifier: state.InitiativeReducer.iniMiscModifier
  }
);

const actionCreators = {
  modifyInitiative,
  modifyIniDexModifier,
  increaseIniDexModifier,
  decreaseIniDexModifier,
  modifyIniMiscModifier,
  increaseIniMiscModifier,
  decreaseIniMiscModifier
};

export default connect(mapStateToProps, actionCreators)(InitiativeModal);
