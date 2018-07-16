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
  modifyName,
  modifyLevel,
  increaseLevel,
  decreaseLevel
} from '../actions/ClassActions';

const ClassModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your class and level' />
    <StatusInput
      label='Class'
      value={props.name}
      context='className'
      modifyName={props.modifyName}
    />
    <StatusInput
      number
      label='Level'
      value={props.level}
      context='classLevel'
      modifyLevel={props.modifyLevel}
      increaseLevel={props.increaseLevel}
      decreaseLevel={props.decreaseLevel}
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
    name: state.ClassReducer.name,
    level: state.ClassReducer.level
  }
);

const actionCreators = {
  modifyName,
  modifyLevel,
  increaseLevel,
  decreaseLevel
};

export default connect(mapStateToProps, actionCreators)(ClassModal);
