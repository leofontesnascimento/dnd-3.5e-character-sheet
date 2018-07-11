import React from 'react';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  NumberIn,
  TextIn,
  SmallLabel
} from './';

const StatusInput = props => {
  if (props.number) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <View style={styles.viewButton}>
            <Button
              title='-'
              color='#FA6900'
              onPress={() => {
                console.log('-1');
              }}
            />
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewLabel}>
              <SmallLabel label={props.label} />
            </View>
            <View style={styles.viewValue}>
              <NumberIn value={props.value} />
            </View>
          </View>
          <View style={styles.viewButton}>
            <Button
              title='+'
              color='#FA6900'
              onPress={() => {
                console.log('+1');
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <SmallLabel label={props.label} />
      </View>
      <View style={styles.viewValue}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: '100%'
            }}
          >
            <TextIn value={props.value} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  viewValue: {
    backgroundColor: '#FFF',
    marginTop: 5
  },
  viewInput: {
    flex: 3,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  viewButton: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export { StatusInput };
