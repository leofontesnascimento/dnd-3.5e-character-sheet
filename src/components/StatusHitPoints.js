import React from 'react';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  LargeLabel,
  SmallLabel
} from '../components';

const StatusHitPoints = props => (
  <View style={styles.container}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SmallLabel label={'Hit Points'} />
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <View style={styles.btnHitPoints}>
        <Button
          title='+'
          color='#FA6900'
          onPress={() => {
            console.log('Heal');
          }}
        />
      </View>
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
      </View>
      <View style={styles.btnHitPoints}>
        <Button
          title='-'
          color='#FA6900'
          onPress={() => {
            console.log('Damage');
          }}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  btnHitPoints: {
    width: 50
  }
});

export { StatusHitPoints };
