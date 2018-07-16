import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  LargeLabel,
  SmallLabel
} from '../components';

const Experience = props => (
  <View style={styles.container}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LargeLabel label={props.current} />
      <SmallLabel label=' / ' />
      <SmallLabel label={props.total} />
      <SmallLabel label={' xp'} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  }
});

export { Experience };
