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
  modifyClassName,
  modifyClassLevel,
  increaseClassLevel,
  decreaseClassLevel
} from '../actions/ClassActions';

import {
  storeData
} from '../storage/Storage';

const ClassModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your class and classLevel' />
    <StatusInput
      label='Class'
      value={props.className}
      context='className'
      modifyClassName={props.modifyClassName}
    />
    <StatusInput
      number
      label='Level'
      value={props.classLevel}
      context='classLevel'
      modifyClassLevel={props.modifyClassLevel}
      increaseClassLevel={props.increaseClassLevel}
      decreaseClassLevel={props.decreaseClassLevel}
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
              key: '@DnDSuperStore:className',
              value: props.className
            });
            storeData({
              key: '@DnDSuperStore:classLevel',
              value: props.classLevel
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
    className: state.ClassReducer.className,
    classLevel: state.ClassReducer.classLevel
  }
);

const actionCreators = {
  modifyClassName,
  modifyClassLevel,
  increaseClassLevel,
  decreaseClassLevel
};

export default connect(mapStateToProps, actionCreators)(ClassModal);
