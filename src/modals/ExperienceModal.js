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
  decreaseCurrentExperience,
  decreaseTotalExperience,
  increaseCurrentExperience,
  increaseTotalExperience,
  modifyCurrentExperience,
  modifyTotalExperience
} from '../actions/ExperienceActions';

const ExperienceModal = props => (
  <View style={styles.container}>
    <LargeLabel label='Set your experience points' />
    <StatusInput
      number
      label='Current'
      value={props.currentExperience}
      context='currentExperience'
      modifyCurrentExperience={props.modifyCurrentExperience}
      increaseCurrentExperience={props.increaseCurrentExperience}
      decreaseCurrentExperience={props.decreaseCurrentExperience}
    />
    <StatusInput
      number
      label='Total'
      value={props.totalExperience}
      context='totalExperience'
      modifyTotalExperience={props.modifyTotalExperience}
      increaseTotalExperience={props.increaseTotalExperience}
      decreaseTotalExperience={props.decreaseTotalExperience}
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
  }
});

const mapStateToProps = state => (
  {
    currentExperience: state.ExperienceReducer.currentExperience,
    totalExperience: state.ExperienceReducer.totalExperience
  }
);

const actionCreators = {
  increaseCurrentExperience,
  decreaseCurrentExperience,
  modifyCurrentExperience,
  increaseTotalExperience,
  decreaseTotalExperience,
  modifyTotalExperience
};

export default connect(mapStateToProps, actionCreators)(ExperienceModal);
