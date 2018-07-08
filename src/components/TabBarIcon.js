import React from 'react';

import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default props => (
  <View style={styles.container}>
    <Image
      style={styles.icon}
      source={props.source}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 30,
    width: 35
  }
});
